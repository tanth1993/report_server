import express from 'express'
const app = express()
const port = 3099


app.get('/api/test', (req, res) => {
    res.send('tesst APi here2222222!')
})
app.get('/api/entry', (req, res) => {
    res.send('entry API fucking here2222222!')
})
app.get('/api', (req, res) => {
    res.send('Hello World 2222222!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;