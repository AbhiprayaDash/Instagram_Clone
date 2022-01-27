import bcrypt from 'bcrypt'

const FormSignUp = model => async (req,res)=>{
    try{
        const contactno = req.body.hasOwnProperty('contactno')?req.body.contactno:null;
        const emailaddr = req.body.hasOwnProperty('email')?req.body.email:null;
        const fullname = req.body.hasOwnProperty('fullname')?req.body.fullname:null;
        const username = req.body.hasOwnProperty('username')?req.body.username:null;
        const password = req.body.hasOwnProperty('password')?req.body.password:null;
        console.log(emailaddr,fullname,username,password)
        if(!emailaddr||!fullname||!username||!password)
        {
            return res.status(400).json("Invalid credentials");
        }
        const salt=await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password,salt);
        if(contactno===null)
        {
            await model.create({email:emailaddr,fullname,username,password:hashedpassword});
        }
        else{
            await model.create({Contactno:contactno,email:emailaddr,fullname,username,password:hashedpassword});
        }
        return res.status(200).send('user created')
    }
    catch(error)
    {
        return res.status(500).json('Server Error')
    }
}
const FbSignUp = model =>(req,res)=>{
    
}

export const SignUpControllerUtil = model =>({
    FormSignUp:FormSignUp(model),
    FbSignUp:FbSignUp(model)
})