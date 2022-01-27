import {SignUpControllerUtil} from '../Util/Auth/signup.mjs'
import User from '../model/user.mjs'

export const SignUpController = SignUpControllerUtil(User)