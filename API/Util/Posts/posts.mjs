import jwt from 'jsonwebtoken'


const Addposts = model =>async (req,res)=>{
    try{
        const token=req.header('x-auth-token');
        const decoded=jwt.verify(token,'shhhhh');
        const userId = decoded.user.id
        const content = req.body.content;
        const location = req.body.hasOwnProperty('location')?req.body.location:null;
        await model.create({User:userId,content,location});
        return res.status(200).json('post created')
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}
const getPost = model =>async (req,res)=>{
    try{
        const postid = req.params.id;
        const result = await model.findOne({_id:postid})
        return res.status(200).send(result)
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}
const editPosts = model =>async (req,res)=>{
    try{
        const postid = req.params.id;
        const postcontent = req.body.content;
        const update = {
            "$set": {
              "content": postcontent,
            }
        };
        const query={"_id":postid};
        await model.findOneAndUpdate(query,update,{ "returnNewDocument": false })
        return res.status(200).send('post edited')
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}
const getAllPosts = (model,followmodel) =>async (req,res)=>{
    try{
        const result = await followmodel.find({follower:req.params.id}).populate('followee').sort( [['_id', -1]] ).limit(20).exec();
        const postres=[]
        console.log(result)
        for(var i=0;i<result.length;i++)
        {
            const userresult = await model.findOne({id:result[i].id});  
            postres.push(userresult)
        }
        return res.status(200).json(postres)
    }
    catch(error)
    {
        return res.status(500).json('server error')
    }
}
const deletePost = model =>async(req,res)=>{
    try{
        const postid = req.params.postid;
        await model.deleteOne({"_id":postid})
        return res.send(200).send('post deleted')
    }
    catch(error)
    {
        return res.send(500).json('server Error')
    }
}
export const PostcontrollerUtil = (model,followmodel) =>({
    Addposts:Addposts(model),
    getPost:getPost(model),
    editPosts:editPosts(model),
    getAllPosts:getAllPosts(model,followmodel),
    deletePost:deletePost(model)
})