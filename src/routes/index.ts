import { Router } from 'express'
import dbConnection from '@dev/_config'
import SubjectController from '@dev/controllers/SubjectController'
import StudentController from '@dev/controllers/StudentController'
import GradeController from '@dev/controllers/GradeController'
import GradeTenScoreController from '@dev/controllers/GradeTenScoreController'
import GradeElevenScoreController from '@dev/controllers/GradeElevenScoreController'
import GradeTwelveScoreController from '@dev/controllers/GradeTwelveScoreController'

const router = Router()

router.use(async (req, res, next) => {
    await dbConnection()
    return next()
})

router.use('/subjects', SubjectController.index)

router.use('/students', StudentController.index)

router.use('/grades', GradeController.index)

router.use('/grade-ten-score', GradeTenScoreController.index)

router.use('/grade-eleven-score', GradeElevenScoreController.index)

router.use('/grade-twelve-score', GradeTwelveScoreController.index)

export default router