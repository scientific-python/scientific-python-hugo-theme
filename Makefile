.PHONY: doc-serve shortcode-docs netlify-preview preview-theme theme docs scipy main blog learn tools serve-dev
.DEFAULT_GOAL := doc-serve

GH_ORG = scientific-python
TEAMS_DIR = doc/content/about
TEAMS = theme-team
TEAMS_QUERY = python tools/team_query.py

$(TEAMS_DIR):
	mkdir -p $(TEAMS_DIR)

$(TEAMS_DIR)/%.toml: $(TEAMS_DIR)
	$(eval TEAM_NAME=$(shell python -c "import re; print(' '.join(x.capitalize() for x in re.split('-|_', '$*')))"))
	$(TEAMS_QUERY) --org $(GH_ORG) --team "$*"  >  $(TEAMS_DIR)/$*.toml

teams-clean:
	for team in $(TEAMS); do \
	  rm -f $(TEAMS_DIR)/$${team}.toml ;\
	done

teams: | teams-clean $(patsubst %,$(TEAMS_DIR)/%.toml,$(TEAMS))

doc/content/shortcodes.md: $(wildcard layouts/shortcodes/*.html)
	(cd layouts && python ../tools/render_shortcode_docs.py > ../doc/content/shortcodes.md)

# Serve for development purposes.
serve-dev: doc-serve
doc-serve: doc/content/shortcodes.md
	(cd doc && hugo --printI18nWarnings serve --themesDir="../.." --disableFastRender --poll 1000ms)

# -----------------------------------
# The following is for use on netlify
# -----------------------------------

netlify-preview: preview-theme theme scipy main blog learn tools
	mv scipy/public doc/public/scipy
	mv main/public doc/public/main
	mv blog/public doc/public/blog
	mv learn/public doc/public/learn
	mv tools/public doc/public/tools
	git restore doc/content/_index.md

preview-theme:
	python tools/add_preview_links.py

theme: doc/content/shortcodes.md
	(cd doc ; hugo --themesDir="../..")

scipy:
	rm -rf $@
	git clone --depth 1 https://github.com/scipy/scipy.org $@
	(cd $@ ; perl -pi -e 'print "relativeURLs: true\n" if $$. == 1' config.yaml)
	(cd $@ ; hugo --themesDir="../..")

main:
	rm -rf $@
	git clone --depth 1 https://github.com/scientific-python/scientific-python.org $@
	(cd $@ ; git submodule update --init content/specs)
	(cd $@ ; pip install -q -r requirements.txt)
	(cd $@ ; make calendars ; make core-project-json)
	(cd $@ ; perl -pi -e 'print "relativeURLs: true\n" if $$. == 1' config.yaml)
	(cd $@ ; hugo --themesDir="../..")

blog:
	rm -rf $@
	git clone --depth 1 https://github.com/scientific-python/blog.scientific-python.org $@
	(cd $@ ; perl -pi -e 'print "relativeURLs: true\n" if $$. == 1' config.yaml)
	(cd $@ ; hugo --themesDir="../..")

learn:
	rm -rf $@
	git clone --depth 1 https://github.com/scientific-python/learn.scientific-python.org $@
	(cd $@ ; perl -pi -e 's;/development/;https://learn.scientific-python.org/development/;g' content/_index.md)
	(cd $@ ; perl -pi -e 'print "relativeURLs: true\n" if $$. == 1' config.yaml)
	(cd $@ ; hugo --themesDir="../..")

tools:
	rm -rf $@
	git clone --depth 1 https://github.com/scientific-python/tools.scientific-python.org $@
	(cd $@ ; perl -pi -e 'print "relativeURLs: true\n" if $$. == 1' config.yaml)
	(cd $@ ; hugo --themesDir="../..")
