import  Router  from "express";
import passport from "passport-facebook";
import userController from "../Util/Auth/fblogin.mjs";
import { LoginController } from "../Controller/logincontroller.mjs";
const router = Router();

// const facebookAuth = () =>{
//       passport.authenticate('facebook', { failureRedirect: '/notfound', failureMessage: true })
// }
// // route.use(facebookAuth)
// router
//       .route('/facebook',facebookAuth)
//       .get((req,res)=>{
//             res.send('successfully signed Up using fb')
//       })
router
      .route('/form')
      .post((req,res)=>{
          LoginController.FormLogin(req,res);  
      })
export default router