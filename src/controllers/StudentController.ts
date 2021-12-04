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
    async getStudentsByGender(isMale?: boolean) {
        const pipeline = [
            {
                "$match": {
                    "isMale": isMale
                }
            },
            {
                "$project": {
                    "studentId": 1.0,
                    "_id": 0.0
                }
            }
        ];

        const data = await StudentModel.aggregate<{ studentId: string }>(pipeline);
        return data;
    }
}
export default new StudentController()