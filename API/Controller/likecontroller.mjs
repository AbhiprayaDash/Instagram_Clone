import Like from '../model/like.mjs'
import { Likeutilcontroller } from '../Util/Like/like.mjs'
import Post from '../model/posts.mjs'

export const Likecontroller = Likeutilcontroller(Like,Post)