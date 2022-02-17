import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken'
const FormLogin = model => async (req,res)=>{
    let result;
    if(req.body.hasOwnProperty('contactno'))
    {
        result = await model.findOne({contactno:req.body.contactno})
        if(!result)
        {
            return res.status(400).json("Invalid credentials");
        }
    }
    if(req.body.hasOwnProperty('email'))
    {
        result = await model.findOne({email:req.body.email})
        if(!result)
        {
            return res.status(400).json("Invalid credentials");
        }
    }
    const match = await bcrypt.compare(req.body.password,result.password);
    if(!match)
    {
        return res.status(400).json('Invalid Credentials');
    }
    console.log(result)
    const payload = {
        user:{
            id:result._id
        }
    }
    jwt.sign(payload,'shhhhh',
    {expiresIn:360000},
    (err,token)=>{
        if(err) throw err;
        console.log(token)
        return res.json(token);
    });
}
const FbLogin = model => async (req,res)=>{
}

export const LoginControllerUtil = model =>({
    FormLogin:FormLogin(model),
    FbLogin:FbLogin(model)
})