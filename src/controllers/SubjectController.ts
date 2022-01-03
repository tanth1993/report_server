import { Request, Response, NextFunction } from 'express';
import { IQuery, ITotal } from '@dev/interfaces'
import { SubjectModel } from '@dev/models'
import GradeTenScoreController from '@dev/controllers/GradeTenScoreController'
import GradeElevenScoreController from '@dev/controllers/GradeElevenScoreController'
import GradeTwelveScoreController from '@dev/controllers/GradeTwelveScoreController'

class SubjectController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const data = await SubjectModel.find({})
            res.json(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
    async getAvgScoreEachYearBySubject(req: Request, res: Response) {
        const { query } = req
        const { subjectId } = query as IQuery

        if (!subjectId) {
            res.status(500).send('missing subjectId query')
            return
        }

        try {
            const avgScoreTen = GradeTenScoreController.getAvgScoreBySubject(subjectId);
            const avgScoreEleven = GradeElevenScoreController.getAvgScoreBySubject(subjectId);
            const avgScoreTwelve = GradeTwelveScoreController.getAvgScoreBySubject(subjectId);

            const datas = await Promise.all([avgScoreTen, avgScoreEleven, avgScoreTwelve])

            const flattenData: ITotal<string>[] = [];

            (datas as ITotal<string>[][]).map((dList: ITotal<string>[]) => {
                flattenData.push(...dList)
            })

            res.json(flattenData);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

    async getAmountStudentsInScoreScaleBySubject(req: Request, res: Response) {
        const { query } = req
        const { subjectId, gradeId } = query as IQuery

        if (!subjectId) {
            res.status(500).send('missing subjectId query')
            return
        }

        let rsp: ITotal<number>[] | null = []
        try {
            switch (gradeId) {
                case 10:
                    rsp = await GradeTenScoreController.getScaleScoreBySubject(subjectId)
                    break;
                case 11:
                    rsp = await GradeElevenScoreController.getScaleScoreBySubject(subjectId)
                    break;
                case 12:
                    rsp = await GradeTwelveScoreController.getScaleScoreBySubject(subjectId)
                    break;

                default:
                    res.status(500).send('missing gradeId query')
                    return;
            }

            res.json(rsp);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

}
export default new SubjectController()