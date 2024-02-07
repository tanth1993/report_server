import { Request, Response, NextFunction } from 'express';
import { NewsModel, INewsModel } from '@dev/models'
import { IQuery, ITotal } from '@dev/interfaces'
import * as Interfaces from '@dev/interfaces';
import { Types } from 'mongoose';

class NewsController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const data = await NewsModel.find({})
            res.json(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

    async getDataByQuery(req: Request, res: Response) {
        try {
            const { query } = req
            if (!(Object.keys(query)?.length > 0))
                throw new Error("missing Query");

            const { text, page = 1, pageSize = 10 } = query as Interfaces.IPaginationQuery
            const skip = page > 0 ? (page - 1) * pageSize : 0
            const textStr = text ? text.toString() : ''
            const textPattern = new RegExp(textStr, 'i')

            const data = await NewsModel.find({ name: textPattern }).skip(skip).limit(pageSize)
            const totalCount = await NewsModel.find({ name: textPattern }).count();

            const paginationData: Interfaces.IPaginationData<INewsModel[]> = { data, totalCount }
            res.json(paginationData);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
    async getDetail(req: Request, res: Response) {
        try {
            const { id } = req.params
            if (!id)
                throw new Error("missing Query Id");

            const objectId = new Types.ObjectId(id)
            const data = await NewsModel.findById(objectId).exec()
            res.json(data);

        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
    async deleteMany(req: Request, res: Response) {
        try {
            const { ids } = req?.query
            if (!ids)
                throw new Error("missing Query Ids");

            const idArr = (ids as string)?.split(',')
            const data = await NewsModel.deleteMany({ _id: { $in: idArr } })
            res.json(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
    async createNews(req: Request, res: Response) {
        try {
            if (!req.body)
                throw new Error("missing Body Request");
            const docs: INewsModel[] = req.body

            const data = await NewsModel.create(docs);
            res.json(data);

        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
    async updateNews(req: Request, res: Response) {
        try {
            if (!req.body)
                throw new Error("missing Body Request");

            if (!req.params?.id)
                throw new Error("missing Id");

            const doc: INewsModel = req.body
            const data = await NewsModel.findOneAndUpdate({ _id: req.params?.id }, doc, { returnOriginal: false });
            res.json(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

}
export default new NewsController()