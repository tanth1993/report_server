import { Request, Response, NextFunction } from 'express';
import { GradeTwelveScoreModel } from '@dev/models'

class GradeTwelveScoreController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const test = await GradeTwelveScoreModel.find({})
            res.json(test);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }
}
export default new GradeTwelveScoreController()