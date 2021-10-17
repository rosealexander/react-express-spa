import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    static all = async (req: Request, res: Response) => {
        //Get users from database
        const userRepository = getRepository(User);
        const users = await userRepository.find();

        //Send the users object
        res.send(users);
    };


    // async one(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.findOne(request.params.id);
    // }
    //
    // async save(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.save(request.body);
    // }
    //
    // async remove(request: Request, response: Response, next: NextFunction) {
    //     let userToRemove = await this.userRepository.findOne(request.params.id);
    //     await this.userRepository.remove(userToRemove);
    // }

}
