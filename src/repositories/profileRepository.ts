import { AppDataSource } from "../data-source";
import { Profile } from "../models/entities/Profile";

export const profileRepository = AppDataSource.getRepository(Profile)