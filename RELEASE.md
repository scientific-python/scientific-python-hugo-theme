# Release process for `scientific-python-hugo-theme`

## Introduction

Example `version number`

- 1.8.dev0 # development version of 1.8 (release candidate 1)
- 1.8rc1 # 1.8 release candidate 1
- 1.8rc2.dev0 # development version of 1.8 release candidate 2
- 1.8 # 1.8 release
- 1.9.dev0 # development version of 1.9 (release candidate 1)

## Process

- Set release variables:

      export VERSION=<version number>
      export PREVIOUS=<previous version number>
      export ORG="scientific-python"
      export REPO="scientific-python-hugo-theme"
      export LOG="CHANGELOG.md"

- Autogenerate release notes

      changelist ${ORG}/${REPO} v${PREVIOUS} main --version ${VERSION} --config pyproject.toml --out ${VERSION}.md

- Put the output of the above command at the top of `CHANGELOG.md`

      cat ${VERSION}.md | cat - ${LOG} > temp && mv temp ${LOG}

- Update `version` in `pyproject.toml`.

- Commit changes:

      git add pyproject.toml CHANGELOG.md
      git commit -m "Designate ${VERSION} release"

- Tag the release in git:

      git tag -s v${VERSION} -m "signed ${VERSION} tag"

  If you do not have a gpg key, use -u instead; it is important for
  Debian packaging that the tags are annotated

- Push the new meta-data to github:

      git push --tags origin main

  where `origin` is the name of the `github.com:scientific-python/scientific-python-hugo-theme`
  repository

- Create release from tag

      - go to https://github.com/scientific-python/scientific-python-hugo-theme/releases/new?tag=v${VERSION}
      - add v${VERSION} for the `Release title`
      - paste contents (or upload) of ${VERSION}.md in the `Describe this release section`
      - if pre-release check the box labelled `Set as a pre-release`

- Update https://github.com/scientific-python/scientific-python-hugo-theme/milestones:

      - close old milestone
      - ensure new milestone exists (perhaps setting due date)

- Update `version` in `pyproject.toml`.

- Commit changes:

      git add pyproject.toml
      git commit -m 'Bump version'
      git push origin main
