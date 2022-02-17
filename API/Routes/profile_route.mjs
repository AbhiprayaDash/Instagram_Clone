import  Router  from "express";
import Auth from "../middleware/auth.mjs";
import { Profilecontroller } from '../Controller/profilecontroller.mjs';

const router = Router();


// middleware
router.use(Auth)

router
    .route('/')
    .get((req,res)=>{
        Profilecontroller.getProfile(req,res)    
    })

export default router