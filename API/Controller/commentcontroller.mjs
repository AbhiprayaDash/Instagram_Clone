import { CommentUtilController } from "../Util/Comment/comment.mjs";
import Comment from "../model/comment.mjs";
import Post from "../model/posts.mjs";
import Like from '../model/like.mjs'

export const commentController = CommentUtilController(Comment,Post,Like)