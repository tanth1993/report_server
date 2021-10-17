import { Request, Response, NextFunction } from 'express';
import { SubjectModel } from '@dev/models'

class SubjectController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const test = await SubjectModel.find({})
            res.json(test);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }
}
export default new SubjectController()