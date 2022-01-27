import jwt from 'jsonwebtoken'

const Auth = function(req,res,next){
   //Get token from header
   const token=req.header('x-auth-token');
   
   //check if not token
   if(!token)
   {
       return res.status(401).json({msg:'No token,authorization denied'});
   }
   //verify token
   try{
       const decoded=jwt.verify(token,'shhhhh');
       req.user=decoded.user;//decoded.user because we have set user in payload
       next();  
    }
    catch(err)
    {
        res.status(401).json({msg:'Token is not valid'});
    }

};

export default Auth;