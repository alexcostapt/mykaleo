import { timeStamp } from "console";
import { Request, Response } from "express";
import { companyRepository } from "../repositories/companyRepository";

export class CompanyController{

    async create(req: Request, res: Response) {
        //criar company
        const {name, nif, email} = req.body
        if(!name || !nif || !email)
            return res.status(400).json({success: false, message:'Verify all required fields to create a new company'})
        
        
        try {
            const d = new Date();
            const newCompany = companyRepository.create({
                name: name,
                nif: nif,
                email: email,
                active: true
            })

            console.log(newCompany)
            await companyRepository.save(newCompany)
            
            return res.status(201).json({success: true, message:'Company was created with success!', data: newCompany})
        } catch (error) {
            console.log(res.json({message: 'erro: ' + error}))
        }        
        
    }
}