const plugin = require("tailwindcss/plugin")

const button = require("./components/button")
const card = require("./components/card")
const input = require("./components/input")
const alert = require("./components/alert")
const badge = require("./components/badge")

module.exports = plugin(function ({ addBase, addComponents }) {
    addBase({
        ":root": {
            "--nui-primary": "#2563eb",
            "--nui-base": "#ffffff",
            "--nui-content": "#111827",
        },
    })

    addComponents({
        ...button,
        ...card,
        ...input,
        ...alert,
        ...badge,
    })
})