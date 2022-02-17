import  Router  from "express";
import Auth from "../middleware/auth.mjs";
import { Postcontroller } from "../Controller/postcontroller.mjs";

const router = Router();


// middleware
router.use(Auth)

router
    .route('/new')
    .post((req,res)=>{
        Postcontroller.Addposts(req,res)    
    })
router
    .route('/:id')
    .get((req,res)=>{
        Postcontroller.getPost(req,res)
    })
router
    .route('/')
    .get((req,res)=>{
        Postcontroller.getAllPosts(req,res)
    })
router
    .route('/:id')
    .put((req,res)=>{
        Postcontroller.editPosts(req,res)
    })
router
    .route('/:id')
    .delete((req,res)=>{
        Postcontroller.deletePost(req,res)
    })

export default router