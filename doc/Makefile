.PHONY: help themes html serve clean
.DEFAULT_GOAL := help

help:
	@grep ": ##" Makefile | grep -v grep | tr -d '#'

themes/scientific-python-hugo-theme:
	@if [ ! -d "$<" ]; then \
	  mkdir -p themes; \
	  cd themes; \
	  ln -s ../.. scientific-python-hugo-theme; \
	fi

content/shortcodes.md:
	cp content/shortcodes.md.stub content/shortcodes.md

themes: themes/scientific-python-hugo-theme

html: ## Build site in `./public`
html: themes content/shortcodes.md
	hugo
	yes | npx pagefind --site public

serve: ## Serve site, typically on http://localhost:1313
serve: themes content/shortcodes.md
	@hugo --printI18nWarnings server

clean: ## Remove built files
clean:
	rm -rf public
