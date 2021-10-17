import { Request, Response, NextFunction } from 'express';
import { GradeModel } from '@dev/models'

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
}
export default new GradeController()