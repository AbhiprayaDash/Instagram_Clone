import jwt from 'jsonwebtoken'

const Addcomment = (commentmodel,postmodel) => async (req,res)=>{
    try{
        const postid = req.params.id;
        const comment = req.body.comment;
        const token=req.header('x-auth-token');
        const decoded=jwt.verify(token,'shhhhh');
        const userId = decoded.user.id
        const commentid=await commentmodel.create({user:userId,post:postid,text:comment,isreply:false,like:[]})
        const post = await postmodel.findOne({_id:postid})
        if(post)
        {
            const comments = post.comments;
            comments.push(commentid)
            const update = {
                "$set": {
                  "comments": comments,

                },
                "$inc": { 
                    Nocomments:1
                }
            };
            const query={"_id":postid};
            await postmodel.findOneAndUpdate(query,update,{ "returnNewDocument": false })
        }
        return res.status(200).send('Comment Added')
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}
const Editcomment = (commentmodel) =>async(req,res)=>{
    try{
        const query={"_id":req.params.id};
        const update = {
            "$set": {
              "text": req.body.comment,

            },
        }
        await commentmodel.findOneAndUpdate(query,update,{ "returnNewDocument": false })
        return res.status(200).send('Comment Edited')
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}
const Deletecomment = (commentmodel,postmodel) => async(req,res)=>{
    try{
        const commentdoc=await commentmodel.findOne({_id:req.params.id})
        await commentmodel.deleteOne({_id:req.params.id});
        await postmodel.updateOne({_id:commentdoc.post},{$pull:{comments:req.params.id},$inc:{Nocomments:-1}})
        return res.status(200).send('Comment Deleted');
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}
const Replycomment = (commentmodel) =>async(req,res)=>{
    try{
        const postid=req.params.postid;
        const comment = req.body.comment;
        const commentid = req.params.commentid;
        const token=req.header('x-auth-token');
        const decoded=jwt.verify(token,'shhhhh');
        const userId = decoded.user.id
        await commentmodel.create({user:userId,post:postid,text:comment,reply:commentid,isreply:true});
        return res.status(200).send('Replied to comment');
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}
const LikeComment = (likemodel,commentmodel)=>async(req,res)=>{
    try{
        const postid = req.params.postid;
        const commentid = req.params.commentid;
        const token=req.header('x-auth-token');
        const decoded=jwt.verify(token,'shhhhh');
        const userId = decoded.user.id
        const likeid = await likemodel.create({post:postid,user:userId,iscommentLike:true});
        const query={"_id":commentid};
        const commentres = await commentmodel.findOne({_id:req.params.commentid});
        const likes = commentres.like;
        likes.push(likeid._id)
        const update = {
            "$set": {
              "like": likes,

            },
        }
        const result=await commentmodel.findOneAndUpdate(query,update,{ "returnNewDocument": true })
        return res.status(200).send('Liked the comment');
    }
    catch(error)
    {   
        return res.status(500).json('Server Error')
    }
}
export const CommentUtilController = (commentmodel,postmodel,likemodel) =>({
    Addcomment:Addcomment(commentmodel,postmodel),
    Editcomment:Editcomment(commentmodel),
    Deletecomment:Deletecomment(commentmodel,postmodel),
    Replycomment:Replycomment(commentmodel),
    LikeComment:LikeComment(likemodel,commentmodel)
})