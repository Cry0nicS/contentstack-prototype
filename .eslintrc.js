"use strict";

module.exports = {
    extends: ["@bkkvbu", "prettier", "next"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.eslint.json"
    },
    plugins: ["simple-import-sort"],
    env: {
        es6: true
    },
    rules: {
        // Place to specify ESLint rules.
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "typeLike",
                format: ["PascalCase"],
                leadingUnderscore: "allow"
            }
        ],
        // See: https://github.com/prettier/eslint-config-prettier#forbid-unnecessary-backticks
        "@typescript-eslint/quotes": ["error", "double", {avoidEscape: true}],
        "@typescript-eslint/no-use-before-define": "off",
        // Nice to have for localized numbers, but clashes with "css-in-js".
        "@typescript-eslint/restrict-template-expressions": "off",
        // Simple import sort.
        "simple-import-sort/imports": [
            "error",
            {groups: [["^\\u0000", "^@?\\w", "^", "^\\.", "^.*\\u0000$"]]}
        ],
        "simple-import-sort/exports": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error"
    },
    // Lint .*.js files in the project root directory.
    ignorePatterns: ["!/.*.js", "src/types/*.d.ts"],
    overrides: [
        {
            // JavaScript CommonJS configuration files.
            files: ["./*.js"],
            rules: {
                "@typescript-eslint/no-require-imports": "off",
                "@typescript-eslint/no-var-requires": "off",
                "strict": ["error", "global"]
            },
            parserOptions: {
                sourceType: "script"
            }
        },
        {
            // Disable rule for JSX pages.
            files: ["src/pages/**", "src/components/**", "src/styles/**"],
            rules: {
                "max-lines-per-function": "off"
            }
        }
    ]
};
