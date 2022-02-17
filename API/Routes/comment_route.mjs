import  Router  from "express";
import Auth from "../middleware/auth.mjs";
import { commentController } from "../Controller/commentcontroller.mjs";

const router = Router();

//middleware
router.use(Auth)


router
      .route('/new/:id')
      .post((req,res)=>{
            commentController.Addcomment(req,res);
      })
router
      .route('/:id')
      .put((req,res)=>{
            commentController.Editcomment(req,res)
      })
router
      .route('/:id')
      .delete((req,res)=>{
            commentController.Deletecomment(req,res)
      })
router
      .route('/reply/:postid/:commentid')
      .post((req,res)=>{
            commentController.Replycomment(req,res)
      })
router
      .route('/like/:postid/:commentid')
      .post((req,res)=>{
            commentController.LikeComment(req,res);
      })

export default router