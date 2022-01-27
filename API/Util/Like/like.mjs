import jwt from 'jsonwebtoken'

const Addlike = (Likemodel,postmodel) =>async (req,res)=>{
    try{
        const token=req.header('x-auth-token');
        const decoded=jwt.verify(token,'shhhhh');
        const userId = decoded.user.id
        const likeid = await Likemodel.create({post:req.params.id,user:userId})
        const post = await postmodel.findOne({_id:req.params.id})
        if(post)
        {
            const likes = post.likes;
            likes.push(likeid)
            const update = {
                "$set": {
                    "likes": likes,
                    },
                    "$inc": { 
                        Nolikes:1
                    }
            };
            const query={"_id":req.params.id};
            await postmodel.findOneAndUpdate(query,update,{ "returnNewDocument": false })
            return res.status(200).send('Liked the post')
        }
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}

const Deletelike = (Likemodel,postmodel) =>async(req,res)=>{
    try{
        const likedoc=await Likemodel.findOne({_id:req.params.id})
        await Likemodel.deleteOne({_id:req.params.id});
        await postmodel.updateOne({_id:likedoc.post},{$pull:{likes:req.params.id},$inc:{Nolikes:-1}}).populate('post').exec()
        return res.status(200).send('Delete like')
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}


export const Likeutilcontroller = (Likemodel,postmodel) =>({
    Addlike:Addlike(Likemodel,postmodel),
    Deletelike:Deletelike(Likemodel,postmodel)
})