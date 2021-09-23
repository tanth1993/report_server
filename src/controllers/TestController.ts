import { Request, Response, NextFunction } from 'express';
import { TestModel } from '@dev/models'
import dbConnection from '@dev/_config'

class TestController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            await dbConnection()
            const test = await TestModel.find({})
            res.json(test);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }
}
export default new TestController()