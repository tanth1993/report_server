import { Request, Response, NextFunction } from 'express';
import { GeoSchema } from '@dev/models'
import dbConnection from '@dev/_config'

class GeoController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            await dbConnection()
            const geo = await GeoSchema.find({}).limit(1)
            res.json(geo);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }
}
export default new GeoController()