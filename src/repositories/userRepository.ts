import { AppDataSource } from "../data-source";
import { User } from "../models/entities/User";

export const UserRepository = AppDataSource.getRepository(User)