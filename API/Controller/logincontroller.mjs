import {LoginControllerUtil} from '../Util/Auth/login.mjs'
import User from '../model/user.mjs'

export const LoginController = LoginControllerUtil(User)