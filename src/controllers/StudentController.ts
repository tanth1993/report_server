import { Request, Response, NextFunction } from 'express';
import { StudentModel } from '@dev/models'
import * as Interfaces from '@dev/interfaces';
import { IStudentModel } from '@dev/models/StudentModel';
import { isValidObjectId, Types } from 'mongoose';
import GradeTenScoreController from '@dev/controllers/GradeTenScoreController';
import GradeElevenScoreController from '@dev/controllers/GradeElevenScoreController';
import GradeTwelveScoreController from '@dev/controllers/GradeTwelveScoreController';


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

    async getStudentsByQuery(req: Request, res: Response) {
        try {
            const { query } = req
            if (!(Object.keys(query)?.length > 0))
                throw new Error("missing Query");

            const { text, page = 1, pageSize = 10 } = query as Interfaces.IPaginationQuery
            const skip = page > 0 ? (page - 1) * pageSize : 0
            const textStr = text ? text.toString() : ''
            const textPattern = new RegExp(textStr, 'i')

            const data = await StudentModel.find({ name: textPattern }).skip(skip).limit(pageSize)
            const totalCount = await StudentModel.find({ name: textPattern }).count();

            const paginationData: Interfaces.IPaginationData<IStudentModel[]> = { data, totalCount }
            res.json(paginationData);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

    async getStudentDetail(req: Request, res: Response) {
        const { id } = req.params
        try {
            if (!isValidObjectId(id))
                throw new Error("missing id");

            const objectId = new Types.ObjectId(id)
            const data = await StudentModel.find({ _id: objectId })

            res.json(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

    async getStudentScoreByGrade(req: Request, res: Response) {
        const { studentId, gradeId } = req.params
        try {
            if (!studentId || !gradeId)
                throw new Error("missing studentId or GradeId");

            let rsp;
            switch (+gradeId) {
                case 10:
                    rsp = await GradeTenScoreController.getDataByStudentId(studentId)
                    break;
                case 11:
                    rsp = await GradeElevenScoreController.getDataByStudentId(studentId)
                    break;
                case 12:
                    rsp = await GradeTwelveScoreController.getDataByStudentId(studentId)
                    break;

                default:
                    throw new Error('missing gradeId query')
            }

            res.json(rsp);
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