
const common = {
    env: {
        "node": true,
        "commonjs": true
    },
    rules: {
        "space-before-function-paren": "off",
        "space-before-blocks": "off",
        "semi": "off",
        "quotes": "off",
        "padding-line-between-statements": "off",
        "no-shadow": "off",
        "no-magic-numbers": "off",
        "lines-between-class-members": "off",
        "indent": "off",
        "func-call-spacing": "off",
        "brace-style": "off",
    
        // Recommended disabled  
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "require-atomic-updates": "off",
    
        // Default-configured
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/space-before-blocks": "warn",
        "@typescript-eslint/semi": "warn",
        "@typescript-eslint/no-this-alias": "warn",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/member-delimiter-style": "warn",
        "@typescript-eslint/lines-between-class-members": "warn",
        "@typescript-eslint/func-call-spacing": "warn",
        "arrow-body-style": "warn",
        "eqeqeq": "warn",
        "keyword-spacing": "warn",
        "no-else-return": "warn",
        "no-multi-assign": "warn",
        "no-multi-spaces": "warn",
        "no-throw-literal": "warn",
        "no-unused-labels": "warn",
        "no-useless-return": "warn",
        "no-var": "warn",
        "object-property-newline": "warn",
        "yoda": "warn",
        "prefer-const": "warn",
    
        // Custom-configured
        "@typescript-eslint/consistent-type-definitions": [
            "warn",
            "interface"
        ],
        "@typescript-eslint/brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": false
            }
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                "allowConciseArrowFunctionExpressionsStartingWithVoid": false,
                "allowDirectConstAssertionInArrowFunctions": true,
                "allowExpressions": true,
                "allowHigherOrderFunctions": true,
                "allowTypedFunctionExpressions": true
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                accessibility: "explicit",
                overrides: {
                    constructors: "no-public",
                    parameterProperties: "no-public"
                }
            }
        ],
        "@typescript-eslint/indent": [
            "warn",
            4,
            {
                "flatTernaryExpressions": true,
                "SwitchCase": 1
            }
        ],
        "@typescript-eslint/padding-line-between-statements": [
            "warn",
            {
                "blankLine": "always",
                "prev": "*",
                "next": ["return", "continue", "break", "for", "while", "if", "throw", "try"]
            },
            {
                "blankLine": "always",
                "next": ["interface", "type", "class", "function", "export"],
                "prev": "*"
            }
        ],
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "default",
                format: ["camelCase", "UPPER_CASE", "snake_case"],
                leadingUnderscore: "allow",
                trailingUnderscore: "allow",
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE", "snake_case"],
                leadingUnderscore: "allow",
                trailingUnderscore: "allow",
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"],
                modifiers: ["exported"]
            },
            {
                selector: "classProperty",
                modifiers: ["static"],
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
            },
            {
                selector: "typeLike",
                format: ["PascalCase"],
            },
            {
                selector: "enumMember",
                format: ["UPPER_CASE"],
            },
            {
                selector: ["import"],
                format: ["camelCase", "PascalCase"],
            },
            {
                selector: ["typeProperty", "objectLiteralProperty"],
                format: null
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "args": "after-used",
                "argsIgnorePattern": "(_[a-zA-Z])",
                "varsIgnorePattern": "(_[a-zA-Z])"
            }
        ],
        "@typescript-eslint/space-before-function-paren": [
            "warn",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "@typescript-eslint/quotes": [
            "warn",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "complexity": [
            "error",
            15
        ],
        "lines-around-comment": [
            "warn",
            {
                "allowArrayEnd": false,
                "allowArrayStart": true,
                "allowBlockEnd": false,
                "allowBlockStart": true,
                "allowClassEnd": false,
                "allowClassStart": true,
                "allowObjectEnd": false,
                "allowObjectStart": true,
                "beforeBlockComment": true,
                "beforeLineComment": true
            }
        ],
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-lines-per-function": [
            "warn",
            {
                "max": 200,
                "skipComments": true
            }
        ],
        "max-params": [
            "warn",
            3
        ],
        "max-statements-per-line": [
            "warn",
            {
                "max": 1
            }
        ],
        "multiline-ternary": [
            "warn",
            "always-multiline"
        ],
        "comma-spacing": [
            "warn",
            {"after": true}
        ],
        "no-multiple-empty-lines": [
            "warn",
            {
                "max": 1
            }
        ],
        "function-paren-newline": [
            "warn",
            "multiline-arguments"
        ],
        "object-curly-newline": [
            "warn",
            {
                "ExportDeclaration": {
                    "consistent": true,
                    "minProperties": 3,
                    "multiline": true
                },
                "ImportDeclaration": "never",
                "ObjectExpression": {
                    "consistent": true,
                    "minProperties": 2,
                    "multiline": true
                },
                "ObjectPattern": {
                    "consistent": true,
                    "multiline": true
                }
            }
        ],
        "spaced-comment": [
            "warn",
            "always"
        ],
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
    ],
};

const react = {
    plugins: [
        "react"
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
    },

    extends: [
    ],

    rules: {
        "react/jsx-closing-bracket-location": "warn",
        "react/jsx-closing-tag-location": "warn",
        "react/jsx-curly-newline": "warn",
        "react/jsx-key": "error",
        "react/jsx-pascal-case": "warn",
        "react/jsx-tag-spacing": "warn",
        "@typescript-eslint/no-var-requires": "off",

        "react/jsx-newline": [
            "warn",
            {
                "prevent": true,
                "allowMultilines": false
            }
        ],
        "react/jsx-max-props-per-line": [
            "warn",
            {
                "maximum": 2
            }
        ],
        "react/jsx-sort-props": [
            "warn",
            {
                "callbacksLast": true,
                "shorthandFirst": true,
                "reservedFirst": ["key"],
                "noSortAlphabetically": true
            }
        ],
        "react/jsx-first-prop-new-line": [
            "warn",
            "multiline"
        ],
        "react/jsx-wrap-multilines": [
            "warn",
            {
                return: "parens-new-line",
                arrow: "parens-new-line",
                assignment: "parens-new-line"
            }
        ],

        "jsx-quotes": [
            "warn",
            "prefer-double"
        ],
    },

    overrides: [{
        files: ["*.tsx"],
        rules: {
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/naming-convention": [
                "warn",
                {
                    selector: "default",
                    format: ["camelCase"],
                    leadingUnderscore: "allow",
                    trailingUnderscore: "allow",
                },
                {
                    selector: "objectLiteralProperty",
                    format: null
                },
                {
                    selector: "import",
                    format: ["camelCase", "PascalCase"],
                },
                {
                    // Allow for function components defined in JSX to be PascalCase
                    selector: "function",
                    format: ["camelCase", "PascalCase"]
                },
                {
                    // Allow for local components wrapped in HOC to be PascalCase
                    selector: "variable",
                    format: ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"],
                    modifiers: ["const", "global"]
                },
                {
                    selector: "variable",
                    format: ["camelCase", "UPPER_CASE", "snake_case"],
                    leadingUnderscore: "allow",
                    trailingUnderscore: "allow"
                },
                {
                    selector: "variable",
                    format: ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"],
                    modifiers: ["exported"]
                },
                {
                    selector: "classProperty",
                    modifiers: ["static"],
                    format: ["camelCase", "UPPER_CASE", "PascalCase"],
                },
                {
                    selector: "typeLike",
                    format: ["PascalCase"],
                },
                {
                    selector: "enumMember",
                    format: ["UPPER_CASE"],
                }
            ]
        }
    }]
};

/* eslint-disable */
module.exports = {
    parser: common.parser,

    plugins: [
        ...common.plugins,
        ...react.plugins,
    ],

    extends: [
        ...common.extends,
        ...react.extends
    ],

    rules: {
        ...common.rules,
        ...react.rules,
    },
    overrides: [
        ...react.overrides
    ]
};