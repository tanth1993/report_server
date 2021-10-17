import { Router } from 'express'
import dbConnection from '@dev/_config'
import SubjectController from '@dev/controllers/SubjectController'
import from '@dev/controllers/'
const router = Router()

router.use(async (req, res, next) => {
    await dbConnection()
    return next()
})

router.use('/subject', SubjectController.index)

export default router