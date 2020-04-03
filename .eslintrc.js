module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
      "prettier",
      '@typescript-eslint',
      'react'
    ],
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
        "no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "ignoreRestSiblings": true
            }
        ],
        "no-unexpected-multiline": "off",
        "no-console": ["error", { "allow": ["info", "warn", "error"] }],
        "react/prop-types": [
            "error",
            {
                "skipUndeclared": true
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "trailingComma": "es5",
                "tabWidth": 4,
                "useTabs": false
            }
        ]
    }
}
