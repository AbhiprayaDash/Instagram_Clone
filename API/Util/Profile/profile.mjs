import jwt from 'jsonwebtoken';

const getProfile = (model) =>async(req,res)=>{
    try{
        const token=req.header('authorization');
        const decoded=jwt.verify(token,'shhhhh');
        const result = await model.findOne({id:decoded.user.id});
        return res.status(200).send(result)
    }
    catch(error)
    {
        return res.send(500).send('server error');
    }
}

export const ProfilecontrollerUtil = (model) =>({
    getProfile:getProfile(model)
})