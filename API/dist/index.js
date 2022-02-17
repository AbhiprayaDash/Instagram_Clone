import express from 'express';
import dotenv from 'dotenv'; // import {mongoconnection} from './config/connect.mjs';

import loginRouter from './Routes/login_route.mjs';
import signupRouter from './Routes/signup_route.mjs';
import postRouter from './Routes/post_router.mjs';
import passport from "passport";
import strategy from "passport-facebook";
import bodyParser from 'body-parser';
import UserController from "./Util/Auth/fblogin.mjs";
import bcrypt from 'bcryptjs';
import { mongoconnection } from './config/dbconnection.mjs';
import commentRouter from './Routes/comment_route.mjs';
import LikeRouter from './Routes/like_route.mjs';
import FollowRouter from './Routes/follow_route.mjs';
import ProfileRouter from './Routes/profile_route.mjs';
import cors from 'cors';
const app = express();
const port = 9000;
app.use(cors()); //middleware
//bodyparser

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
UserController(); //Routes
// app.get('/v1/error',(req,res)=>{
//     res.send('error msg')
// })
// app.get('/v1/home',
//   passport.authenticate('facebook', { failureRedirect: '/v1/error', failureMessage: true }),
//   (req, res)=>{
//     console.log(res)
//     res.send('success');
//   });
// app.get('/v1/login/facebook',passport.authenticate('facebook'))

app.use('/v1/signup', signupRouter);
app.use('/v1/login', loginRouter);
app.use('/v1/posts', postRouter);
app.use('/v1/comments', commentRouter);
app.use('/v1/likes', LikeRouter);
app.use('/v1/follow', FollowRouter);
app.use('/v1/profiles', ProfileRouter);
app.listen(port, async () => {
  await mongoconnection();
  console.log(`Example app listening at http://localhost:${port}`);
});