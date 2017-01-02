(ns package.list
  (:require [clojure.data.json :as json]))

(def packages (-> (slurp "http://cljsjs.github.io/data.json")
                  json/read-str))

(def package-list (mapv (fn [x] [(symbol (str "cljsjs/" (x "artifact")))  (x "version")]) packages))

(println "writing" (count package-list) "in packages.edn")
(spit "packages.edn" package-list)
