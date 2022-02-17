import  Router  from "express";
import Auth from "../middleware/auth.mjs";
import { Likecontroller } from "../Controller/likecontroller.mjs";

const router = Router();

//middleware
router.use(Auth)


router
      .route('/new/:id')
      .post((req,res)=>{
            Likecontroller.Addlike(req,res);
      })
router.
      route('/:id')
      .delete((req,res)=>{
            Likecontroller.Deletelike(req,res);
      })

export default router