import  Router  from "express";
import Auth from "../middleware/auth.mjs";
import { FollowUsercontroller } from "../Controller/followcontroller.mjs";

const router = Router();

//middleware
router.use(Auth)


router
      .route('/:id')
      .post((req,res)=>{
            FollowUsercontroller.FollowUser(req,res);
      })
router 
      .route('/u/:id')
      .post((req,res)=>{
            FollowUsercontroller.Unfollow(req,res)
      })
export default router