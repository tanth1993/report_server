import { Request, Response, NextFunction } from 'express';
import { GradeElevenScoreModel } from '@dev/models'
import { ITotal } from '@dev/interfaces'

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

            ];

            const data = await GradeElevenScoreModel.aggregate<ITotal<string>>(pipeline);

            res.json(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

    async getAvgScoreByGenderList(genderList: string[]) {
        if (genderList?.length === 0) return null

        try {
            const pipeline = [
                {
                    "$match": {
                        "studentId": {
                            "$in": genderList
                        }
                    }
                },
                {
                    "$group": {
                        "_id": "$subjectId",
                        "total": {
                            "$avg": "$score"
                        }
                    }
                },
            ];

            const data = await GradeElevenScoreModel.aggregate<ITotal<string>>(pipeline);

            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getAvgScoreBySubject(subjectId?: string) {
        if (!subjectId) return null

        try {
            const pipeline = [
                {
                    "$match": {
                        "subjectId": subjectId
                    }
                },
                {
                    "$group": {
                        "_id": "$gradeId",
                        "total": {
                            "$avg": "$score"
                        }
                    }
                },
            ];

            const data = await GradeElevenScoreModel.aggregate<ITotal<string>>(pipeline);

            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }
    async getScaleScoreBySubject(subjectId?: string) {
        if (!subjectId) return null

        try {
            const pipeline = [
                {
                    "$match": {
                        "subjectId": subjectId
                    }
                },
                {
                    "$group": {
                        "_id": "$score",
                        "total": {
                            "$sum": 1
                        }
                    }
                },
            ];

            const data = await GradeElevenScoreModel.aggregate<ITotal<number>>(pipeline);

            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }
}
export default new GradeElevenScoreController()