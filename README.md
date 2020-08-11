# cljsjs-hosted
This repo hosts the contents of [cljsjs](https://github.com/cljsjs/packages) packages.

Its main usage is for self-host clojurescript.

The files are hosted by `gh-pages` at: https://viebel.github.io/cljsjs-hosted

For instance the `moment` package is at: https://viebel.github.io/cljsjs-hosted/cljsjs/moment/production/moment.min.inc.js

The rule for the full url of a package is:

`https://viebel.github.io/cljsjs-hosted/cljsjs/<package-name>/production/<package-name>.min.inc.js`

where `package-name` is the package name with hyphens `-` instead of dots `.`

## How to update packages

1. Retrieve the updated package list and version from "http://cljsjs.github.io/data.json". This will put all the deps in a file `packages.edn`

```bash
lein run -m clojure.main ./scripts/package-list.clj
```

2. Copy the contents of `packages.edn` into `project.clj`

3. Download stuff

```bash
lein deps
```
4. extract the contents of the packages into the `cljsjs` folder

```bash
./scripts/extract-packages

```

5.  Commit and Push
```bash
git add .
git commit -m 'Upgrade packages'
git push
```

6.Open a PR


