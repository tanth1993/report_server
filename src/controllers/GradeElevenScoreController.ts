import { Request, Response, NextFunction } from 'express';
import { GradeElevenScoreModel } from '@dev/models'

class GradeElevenScoreController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const test = await GradeElevenScoreModel.find({})
            res.json(test);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }
}
export default new GradeElevenScoreController()