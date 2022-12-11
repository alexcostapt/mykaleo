import {Router} from 'express'
import { CompanyController } from './controllers/CompanyController'
import { ProfileController } from './controllers/ProfileController'
import { UserController } from './controllers/UserController'

const routes = Router()

//company routes
routes.post('/company', new CompanyController().create)


//User routes
routes.post('/user', new UserController().create)


//Routes Profile
routes.post('/profile', new ProfileController().create)
export default routes