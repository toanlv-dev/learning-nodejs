const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const engine = require('express-handlebars')

const route = require('./routes')

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(
    '/dist',
    express.static(
        path.join(
            path.dirname(path.dirname(require.main.filename)),
            'node_modules/bootstrap/dist',
        ),
    ),
)

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

console.log(
    path.join(
        path.dirname(path.dirname(require.main.filename)),
        'node_modules/bootstrap/dist',
    ),
)

app.engine('.hbs', engine.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))
route(app)
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
