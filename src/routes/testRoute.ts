import { Router } from 'express'
import TestController from '@dev/controllers/TestController'

const router = Router()

router.use('/', TestController.index)


export default router