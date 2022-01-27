import jwt from 'jsonwebtoken'

const FollowUser = model =>async(req,res)=>{
    try{
        console.log('entered')
        const token=req.header('x-auth-token');
        const decoded=jwt.verify(token,'shhhhh');
        const userId = decoded.user.id
        await model.create({follower:userId,followee:req.params.id})
        return res.status(200).send('Followed')
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}

const Unfollow = model =>async(req,res)=>{
    try{
        await model.deleteOne({followee:req.params.id});
        return res.status(200).send('Unfollowed')
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}

export const FollowUserUtilcontrolller = model=>({
    FollowUser:FollowUser(model),
    Unfollow:Unfollow(model)
})