import  Router  from "express";
import passport from "passport-facebook";
import {SignUpController} from '../Controller/signupcontroller.mjs'


const router = Router();

// router
//       .route('/facebook')
//       .get(passport.authenticate('facebook', { failureRedirect: '/notfound', failureMessage: true }),(req,res)=>{
//             res.send('successfully signed Up using fb')
//       })
router
      .route('/form')
      .post((req,res)=>{
            SignUpController.FormSignUp(req,res)
      })
export default router