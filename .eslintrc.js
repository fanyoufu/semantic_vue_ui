module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "rules": {
        "vue/no-use-v-if-with-v-for": ["error", {
        "allowUsingIterationVar": false
        }]
    }
}