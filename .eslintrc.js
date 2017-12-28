module.exports = {
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        "plugin:jest/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "jest",
        "import"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "jest/globals": true
    },
    "globals": {
        "document": false
    },
    "rules": {
        "indent": [
            1,
            "tab",
            {
                "SwitchCase": 1,
                "VariableDeclarator": 1
            }
        ],
        "no-tabs": 0,
        "react/prop-types": 0,
        "react/jsx-indent": [
            2,
            "tab"
        ],
        "react/jsx-indent-props": [
            2,
            "tab"
        ],
        "max-len": 0,
        "prefer-destructuring": 0,
        "import/prefer-default-export": 0,
        "react/prefer-stateless-function": [0, { "ignorePureComponents": false }],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
};
