import express from 'express'
const app = express()
const port = 3099

app.get('/', (req, res) => {
    res.send('Hello World heheheheh!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})