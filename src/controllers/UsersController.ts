import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
    async index(req: Request, res: Response) {
        const allUsers = await db('users')
            .select('*')

        return res.send(allUsers);
    }
}