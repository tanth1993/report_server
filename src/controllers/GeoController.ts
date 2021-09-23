import { Request, Response, NextFunction } from 'express';
import { GeoSchema } from '@dev/models'

class GeoController {
    constructor() { }

    async index(req: Request, res: Response) {
        try {
            const geo = await GeoSchema.find({}).limit(1)
            res.json(geo);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }

    }
}
export default new GeoController()