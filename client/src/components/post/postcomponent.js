import { Fragment, useEffect, useState } from "react"
import axios from 'axios'
import Displaypost  from "./displaypostcomponent.js"; 
import jwt_decode from "jwt-decode";

const token = localStorage.getItem('user');
const trimtoken = token.substring(1,token.length-1)
var decoded = jwt_decode(token);
decoded=decoded.user;
console.log(decoded)
axios.interceptors.request.use(function (config) {
        config.headers.authorization=trimtoken;
        return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});



const Postcomponent = () =>{
    const [postres,setpostres]=useState([]);
    const [username,setusername] = useState('');
    const [fullname,setfullname] = useState('');
    const loaddata =  async () =>{
        const result = await axios.get('http://localhost:9000/v1/posts/');
        var resultarr=[[]];
        result.data?.map((arr,index)=>{
            arr?.map((value,index1)=>{
                resultarr[index].push(value);
            })
        })
        setpostres(resultarr);
        const userresult = await axios.get('http://localhost:9000/v1/profiles/');
        setusername(userresult.data.username);
        setfullname(userresult.data.fullname);
        console.log(userresult.data.username,userresult.data.fullname)
    }
    useEffect( () => {
        loaddata()
      },[]);
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-5">
                        {postres.length>0&&<Displaypost postres={postres}/>}
                    </div>
                    <div className="col-3">
                        <div className="card" style={{marginTop:'6%'}}>
                            <p className="card-text">{username!==''&&username}</p>
                            <p className="card-text">{fullname!==''&&fullname}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Postcomponent