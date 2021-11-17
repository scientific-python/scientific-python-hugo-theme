.PHONY: help themes html serve clean
.DEFAULT_GOAL := help

help:
	@grep ": ##" Makefile | grep -v grep | tr -d '#'

themes/scientific-python-hugo-theme:
	@if [ ! -d "$<" ]; then \
	  echo "*** ERROR: missing theme" ; \
	  echo ; \
	  echo "It looks as though you are missing the themes directory."; \
	  echo "You need to add the scientific-python-hugo-theme as a submodule."; \
	  echo ; \
	  echo "Please see https://theme.scientific-python.org/getstarted/"; \
	  echo ; \
	  exit 1; \
	fi

themes/scientific-python-hugo-theme/themes/hugo-fresh/README.md:
	git submodule update --init --recursive

themes: | themes/scientific-python-hugo-theme themes/scientific-python-hugo-theme/themes/hugo-fresh/README.md

html: ## Build site in `./public`
html: themes
	hugo --buildDrafts

serve: ## Serve site, typically on http://localhost:1313
serve: themes
	@hugo --i18n-warnings --buildDrafts server

clean: ## Remove built files
clean:
	rm -rf public
