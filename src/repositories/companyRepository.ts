import { AppDataSource } from "../data-source";
import { Company } from "../models/entities/Company";


export const companyRepository = AppDataSource.getRepository(Company)