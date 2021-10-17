import { Request, Response, NextFunction } from 'express';
import { GradeTenScoreModel } from '@dev/models'

class GradeTenScoreController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const test = await GradeTenScoreModel.find({})
            res.json(test);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }
}
export default new GradeTenScoreController()