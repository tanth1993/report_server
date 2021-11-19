import { Request, Response, NextFunction } from 'express';
import { GradeTenScoreModel } from '@dev/models'
import { ITotal } from '@dev/interfaces'
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

    async getAvgScore(req: Request, res: Response) {
        try {
            const pipeline = [
                {
                    "$group": {
                        "_id": "$subjectId",
                        "total": {
                            "$avg": "$score"
                        }
                    }
                },
                {
                    "$group": {
                        "_id": null,
                        "total": {
                            "$avg": "$total"
                        }
                    }
                }
            ];

            const data = await GradeTenScoreModel.aggregate<ITotal<number>>(pipeline);

            res.json(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
}
export default new GradeTenScoreController()