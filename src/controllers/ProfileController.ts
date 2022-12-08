import { Request, Response } from "express";
import { profileRepository } from "../repositories/profileRepository";

export class ProfileController{

    async create(req: Request, res: Response) {
        const {profile, prf_edit, prf_read, prf_create, prf_delete} = req.body
        if (!profile || !prf_edit || !prf_read || !prf_create || !prf_delete) {
            return res.status(400).json({success: false, message: 'Verify all required filds to create a new profile'})
        }
        const newProfile = profileRepository.create({
            profile, prf_edit, prf_read, prf_create, prf_delete
        })

        profileRepository.save(newProfile)

        return res.status(201).json({success: true, message: 'Profile created with success!', data: newProfile})
    }
}