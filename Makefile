.PHONY: doc-serve shortcode-docs docs scipy main blog learn serve-dev
.DEFAULT_GOAL := doc-serve

GH_ORG = scientific-python
TEAMS_DIR = doc/content/about
TEAMS = theme-team
TEAMS_QUERY = python tools/team_query.py

$(TEAMS_DIR):
	mkdir -p $(TEAMS_DIR)

$(TEAMS_DIR)/%.md: $(TEAMS_DIR)
	$(eval TEAM_NAME=$(shell python -c "import re; print(' '.join(x.capitalize() for x in re.split('-|_', '$*')))"))
	$(TEAMS_QUERY) --org $(GH_ORG) --team "$*" --dir $(TEAMS_DIR)

teams-clean:
	for team in $(TEAMS); do \
	  rm -f $(TEAMS_DIR)/$${team}.html ;\
	done

teams: | teams-clean $(patsubst %,$(TEAMS_DIR)/%.md,$(TEAMS))

doc/content/shortcodes.md: $(wildcard layouts/shortcodes/*.html)
	(cd layouts && python ../tools/render_shortcode_docs.py > ../doc/content/shortcodes.md)

# Serve for development purposes.
serve-dev: doc-serve
doc-serve: doc/content/shortcodes.md
	(cd doc && hugo --printI18nWarnings serve --themesDir="../.." --disableFastRender --poll 1000ms)

# -----------------------------------
# The following is for use on netlify
# -----------------------------------

netlify-preview: theme scipy main blog learn
	mv scipy/public doc/public/scipy
	mv main/public doc/public/main
	mv blog/public doc/public/blog
	mv learn/public doc/public/learn

theme: doc/content/shortcodes.md
	(cd doc ; hugo --themesDir="../..")

scipy:
	rm -rf $@
	git clone --depth 1 https://github.com/scipy/scipy.org $@
	(cd $@ ; hugo --themesDir="../..")

main:
	rm -rf $@
	git clone --depth 1 https://github.com/scientific-python/scientific-python.org $@
	(cd $@ ; git submodule update --init content/specs)
	(cd $@ ; pip install -q -r requirements.txt)
	(cd $@ ; hugo --themesDir="../..")

blog:
	rm -rf $@
	git clone --depth 1 https://github.com/scientific-python/blog.scientific-python.org $@
	(cd $@ ; make prepare )
	(cd $@ ; hugo --themesDir="../..")

learn:
	rm -rf $@
	git clone --depth 1 https://github.com/scientific-python/learn.scientific-python.org $@
	(cd $@ ; hugo --themesDir="../..")
