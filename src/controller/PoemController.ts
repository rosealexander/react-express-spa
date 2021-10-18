import {getManager} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Haiku} from "../entity/haiku.entity";
import {Limerick} from "../entity/limerick.entity";


export class PoemController {

    static all = async (req: Request, res: Response) => {
        const entityManager = getManager();
        const haikus = await entityManager.find(Haiku, {
            relations: ['author']
        })
        const limericks = await entityManager.find(Limerick, {
            relations: ['author']
        })

        res.send({"haikus": haikus, "limericks": limericks});
    };
}
