import {Router} from 'express'
import { CompanyController } from './controllers/CompanyController'
import { ProfileController } from './controllers/ProfileController'

const routes = Router()

//company routes
routes.post('/company', new CompanyController().create)


//User routes



//Routes Profile
routes.post('/profile', new ProfileController().create)
export default routes