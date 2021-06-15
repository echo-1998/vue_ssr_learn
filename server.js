const server = require('express')()
const Vue = require("vue")
const renderer = require("vue-server-renderer").createRenderer()
server.get('*', (req, res) => {
    const app = new Vue({
        template: `<div>aaa</div>`
    })
    renderer.renderToString(app, (err, html) => {
        if (err) {
            throw err
        }
        console.log(html)
    })
})


