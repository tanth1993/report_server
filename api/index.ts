import express from 'express'
import { VercelRequest, VercelResponse } from '@vercel/node'
const app = express()
const port = 3099

export default function (req: VercelRequest, res: VercelResponse) {
    const { name = 'World' } = req.query;
    res.send(`Hello ${name}!`);
}

// app.get('/', (req, res) => {
//     res.send('Hello World heheheheh!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })