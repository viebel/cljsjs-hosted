# cljsjs-hosted
This repo hosts the contents of [cljsjs](https://github.com/cljsjs/packages) packages.

Its main usage is for self-host clojurescript.

The files are hosted by `gh-pages` at: https://viebel.github.io/cljsjs-hosted

For instance the `moment` package is at: https://viebel.github.io/cljsjs-hosted/cljsjs/moment/production/moment.min.inc.js

The rule for the full url of a package is:

`https://viebel.github.io/cljsjs-hosted/cljsjs/<package-name>/production/<package-name>.min.inc.js`

where `package-name` is the package name with hyphens `-` instead of dots `.`

# Adding/Updating a package

In order to add/update a package, you have to:

1. fork this project
2. `lein run -m clojure.main scripts/package-list.clj`: it writes the list of packages from http://cljsjs.github.io/data.json into a file: `packages.edn`
3. add the packages from `packages.edn` in the `project.clj`
4. run `lein deps`
5. run `./scripts/extract-packages`: it adds the contents of the packages under the `cljsjs` folder.
6. add your folder to git e.g. `git add cljsjs`
7. commit and push - including `project.clj` and `packages.edn`
8. open a pull request

