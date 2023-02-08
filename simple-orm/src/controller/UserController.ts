import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const uuid = parseInt(request.params.id)


        const user = await this.userRepository.findOne({
            where: { uuid }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { username, password, email } = request.body;

        const usernames = Object.assign(new User(), {
            username, password, email
        })

        return this.userRepository.save(usernames)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const uuid = parseInt(request.params.uuid)

        let userToRemove = await this.userRepository.findOneBy({ uuid })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }

}