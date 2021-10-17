import { Request, Response, NextFunction } from 'express';
import { StudentModel } from '@dev/models'

class StudentController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const test = await StudentModel.find({})
            res.json(test);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }
}
export default new StudentController()