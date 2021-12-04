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
router.use('/avg-score-by-subject', SubjectController.getAvgScoreEachYearBySubject)
router.use('/amount-in-scale-by-subject', SubjectController.getAmountStudentsInScoreScaleBySubject)

router.use('/students', StudentController.index)

router.use('/grades', GradeController.index)
router.use('/avg-score-grades/:gradeId', GradeController.getAvgScoreByGrade)
router.use('/avg-score-grades-by-gender', GradeController.getAvgScoreByGender)

router.use('/grade-ten-score', GradeTenScoreController.index)
router.use('/grade-ten-avg-scores', GradeTenScoreController.getAvgScore)

router.use('/grade-eleven-score', GradeElevenScoreController.index)
router.use('/grade-eleven-avg-scores', GradeElevenScoreController.getAvgScore)

router.use('/grade-twelve-score', GradeTwelveScoreController.index)
router.use('/grade-twelve-avg-scores', GradeTwelveScoreController.getAvgScore)

export default router