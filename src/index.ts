import express, { json } from 'express'
import { TestModel, connectDB } from './_config'
import cors from 'cors'
const app = express()
const port = 3099

connectDB()

app.use(cors())
app.get('/api/test', async (req, res) => {

    try {
        const test = await TestModel.find({})
        // console.log(test)
        res.send(JSON.stringify(test));
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