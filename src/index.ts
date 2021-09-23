import express from 'express'
import Router from '@dev/routes'
import cors from 'cors'
const app = express()
const port = 3099

app.use(cors())

app.use('/api/entry', (req, res) => {
    res.send('api/entry without connect MongoDB')
})
app.use('/api', Router)
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})

module.exports = app;