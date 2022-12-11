import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";
import crypto from 'crypto';

const userRepository = UserRepository
const salt = 'mykaleo2022'

export class UserController{
    
    async create(req: Request, res: Response){
        const {name, password, email, company, nif, profile, userLastUpdateId} = req.body
        const userExist = await userRepository.find({
            where: {
                nif: nif
            }
        })

        if(!userExist)
            return res.status(409).json({success: false, message: 'Email is already in use. Please, input a new email or contact your administration to solve this problem.'})

        const newUser = userRepository.create({
            company,
            email,
            name,
            nif,
            password: crypto.pbkdf2Sync(password, salt, 1000, 32, `sha256`).toString(`hex`),
            profile,
            userLastUpdateId
        })
        
        await userRepository.save(newUser)
        res.status(201).json({success: true, message: 'User created with succes. You will receve a email with your credential to access the plataform.', data: newUser})
        
    }

    // async get(email: string) {
    //     return await userRepository.findBy(email) ? true : false;
    // }
}

function hash(params:string) {
    
}