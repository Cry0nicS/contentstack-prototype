"use strict";

module.exports = /** @type {import("@cspell/cspell-types").FileSettings} */ ({
    version: "0.2",
    files: ["**/*.{html,js,json,jsx,md,scss,ts,tsx}", "/.*.{ts,tsx,js,jsx}"],
    ignorePaths: ["package-lock.json", "public/assets/"],
    import: ["@cspell/dict-de-de/cspell-ext.json"],
    language: "en,de",
    cache: {
        useCache: true,
        cacheLocation: "node_modules/.cache/cspell"
    },
    dictionaries: ["custom", "fonts", "html", "node", "software-terms", "typescript"],
    dictionaryDefinitions: [
        {
            name: "custom",
            path: "custom.dic",
            addWords: true
        }
    ]
});
