import { Router } from 'express'
import GeoController from '@dev/controllers/GeoController'

const router = Router()

router.use('/', GeoController.index)


export default router