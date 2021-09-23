import { Request, Response, NextFunction } from 'express';
import { TestModel } from '@dev/models'

class TestController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const test = await TestModel.find({})
            res.json(test);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }
}
export default new TestController()