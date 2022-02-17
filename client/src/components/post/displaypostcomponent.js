const Displaypost = (postres) =>{
    const postresult = postres.postres
    console.log(postresult)
    return(
        <div className="container">
        {
            postresult.map((arr,index)=>{
            return(
                arr?.map((value,index1)=>{
                    return(
                        <div className="card" style={{'width': '36rem',marginTop:'4%',height:'25rem'}}>
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{value.content}</h5>
                            <p className="card-text">{value.User.username}</p>
                            <p>Go somewhere</p>
                        </div>
                        </div>
                    )
                })
            )
            })
        }
        </div>
    )
}

export default Displaypost;