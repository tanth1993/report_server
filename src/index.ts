import express, { json } from 'express'
import { TestModel } from './_config'
import cors from 'cors'
const app = express()
const port = 3099

// connectDB().catch(err => console.log(err));
// app.use(async () => await connectDB())

// const allowCors = fn => async (req, res) => {
//     res.setHeader('Access-Control-Allow-Credentials', true)
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     // another common pattern
//     // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//     res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//     )
//     if (req.method === 'OPTIONS') {
//         res.status(200).end()
//         return
//     }
//     return await fn(req, res)
// }
// app.use(express.json());
app.use(cors())
app.get('/api/test', async (req, res) => {
    try {
        const test = await TestModel.find({})
        // console.log(test)
        res.json(test);
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
    // await connectDB()
    console.log(`App is listening at http://localhost:${port}`)
})


module.exports = app;