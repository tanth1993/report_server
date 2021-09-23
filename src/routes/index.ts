import { Router } from 'express'
import dbConnection from '@dev/_config'
import testRoute from './testRoute'
import geoRoute from './geoRoute'
const router = Router()

router.use(async (req, res, next) => {
    await dbConnection()
    return next()
})

router.use('/test', testRoute)
router.use('/geo', geoRoute)

export default router