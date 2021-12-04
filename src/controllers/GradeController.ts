import { Request, Response, NextFunction } from 'express';
import { GradeModel } from '@dev/models'
import { IQuery } from '@dev/interfaces'
import GradeTenScoreController from '@dev/controllers/GradeTenScoreController'
import GradeElevenScoreController from '@dev/controllers/GradeElevenScoreController'
import GradeTwelveScoreController from '@dev/controllers/GradeTwelveScoreController'
import StudentController from '@dev/controllers/StudentController'

class GradeController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const test = await GradeModel.find({})
            res.json(test);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
    async getAvgScoreByGrade(req: Request, res: Response) {
        const { params } = req
        switch (+params.gradeId) {
            case 10:
                await GradeTenScoreController.getAvgScore(req, res)
                return;
            case 11:
                await GradeElevenScoreController.getAvgScore(req, res)
                return;
            case 12:
                await GradeTwelveScoreController.getAvgScore(req, res)
                return;
            default:
                break;
        }
    }

    async getAvgScoreByGender(req: Request, res: Response) {
        const { params, query } = req
        const { isMale } = query as IQuery
        const data = await StudentController.getStudentsByGender(isMale);
        const list = data.map(d => d?.studentId)
        console.log(list)
    }
}
export default new GradeController()