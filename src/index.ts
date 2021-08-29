import express from 'express'
import { TestModel, connectDB } from './_config'

const app = express()
const port = 3099

connectDB()

app.get('/api/test', async (req, res) => {
    const test = await TestModel.find({})

    try {
        console.log(test)
        res.send(test);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

app.get('/api/entry', (req, res) => {
    res.send('entry API fucking here2222222!')
})
app.get('/api', (req, res) => {
    res.send('Hello World 2222222!')
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})


module.exports = app;