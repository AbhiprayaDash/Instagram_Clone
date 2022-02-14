import Post from '../model/posts.mjs'
import Follow from '../model/follow.mjs'
import { PostcontrollerUtil } from '../Util/Posts/posts.mjs';

export const Postcontroller = PostcontrollerUtil(Post,Follow);