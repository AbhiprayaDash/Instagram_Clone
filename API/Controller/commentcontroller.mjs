import { CommentUtilController } from "../Util/Comment/comment.mjs";
import Comment from "../model/comment.mjs";
import Post from "../model/posts.mjs";

export const commentController = CommentUtilController(Comment,Post)