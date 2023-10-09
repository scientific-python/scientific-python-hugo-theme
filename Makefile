.PHONY: doc-serve shortcode-docs docs
.DEFAULT_GOAL := doc-serve


GH_ORG = scientific-python
TEAMS_DIR = doc/static/teams
TEAMS = theme-team
TEAMS_QUERY = python tools/team_query.py

$(TEAMS_DIR):
	mkdir -p $(TEAMS_DIR)

$(TEAMS_DIR)/%.md: $(TEAMS_DIR)
	$(eval TEAM_NAME=$(shell python -c "import re; print(' '.join(x.capitalize() for x in re.split('-|_', '$*')))"))
	$(TEAMS_QUERY) --org $(GH_ORG) --team "$*"  >  $(TEAMS_DIR)/$*.html

teams-clean:
	for team in $(TEAMS); do \
	  rm -f $(TEAMS_DIR)/$${team}.html ;\
	done

teams: | teams-clean $(patsubst %,$(TEAMS_DIR)/%.md,$(TEAMS))

doc/content/shortcodes.md: $(wildcard layouts/shortcodes/*.html)
	python tools/render_shortcode_docs.py > doc/content/shortcodes.md

# Serve for development purposes.
doc-serve: doc/content/shortcodes.md
	(cd doc && hugo --printI18nWarnings serve --themesDir="../.." --disableFastRender --poll 1000ms)

docs: doc/content/shortcodes.md
	(cd doc ; hugo --themesDir="../..")

PST_SASS_DIR = assets/theme-css/pst
ALL_SASS_FILENAME = $(PST_SASS_DIR)/all.scss

pydata-sphinx-theme-scss:
# Copy the latest SCSS files from the pydata-sphinx-theme repo into
# our project.  This must be passed to a single shell invocation due
# to the variable, which we only want to define when executing this
# rule.  NOTE: This assumes none of these filenames include spaces.
	rm -rf $(PST_SASS_DIR)
	TEMP_DIR=$$(mktemp -d) \
	&& git clone --depth 1 "https://github.com/pydata/pydata-sphinx-theme.git" "$$TEMP_DIR" \
	&& cp -a "$$TEMP_DIR"/src/pydata_sphinx_theme/assets/styles $(PST_SASS_DIR) \
	&& SCSS_FILES=$$(find $(PST_SASS_DIR) -iname '*.scss') \
	&& echo "/* Imported pydata-sphinx-theme Sass files as of: $$(cd $$TEMP_DIR && git rev-parse --short HEAD) */" >$(ALL_SASS_FILENAME) \
	&& for file in $$SCSS_FILES; do echo "@import '$$(basename -s .scss $$file)';" >>$(ALL_SASS_FILENAME); done
