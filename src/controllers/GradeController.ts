import { Request, Response, NextFunction } from 'express';
import { GradeModel } from '@dev/models'
import { IQuery, ITotal } from '@dev/interfaces'
import GradeTenScoreController from '@dev/controllers/GradeTenScoreController'
import GradeElevenScoreController from '@dev/controllers/GradeElevenScoreController'
import GradeTwelveScoreController from '@dev/controllers/GradeTwelveScoreController'
import StudentController from '@dev/controllers/StudentController'

class GradeController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const data = await GradeModel.find({})
            res.json(data);
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
        const { query } = req
        const { isMale, gradeId } = query as IQuery
        const data = await StudentController.getStudentsByGender(isMale);
        const list = data.map(d => d?.studentId)

        let rsp: ITotal<string>[] | null = []

        switch (gradeId) {
            case 10:
                rsp = await GradeTenScoreController.getAvgScoreByGenderList(list)
                break;
            case 11:
                rsp = await GradeElevenScoreController.getAvgScoreByGenderList(list)
                break;
            case 12:
                rsp = await GradeTwelveScoreController.getAvgScoreByGenderList(list)
                break;

            default:
                res.status(500).send('missing gradeId query')
                break;
        }

        if (!rsp) {
            res.status(500).send('Error response')
            return
        }

        res.json(rsp)

    }
}
export default new GradeController()