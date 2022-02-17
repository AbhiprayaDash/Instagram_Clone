import { Fragment } from "react"
import { Link } from "react-router-dom"
import NavComponent from "./navcomponent"
import Postcomponent from "./post/postcomponent"
const Homecomponent = () =>{
    return(
        <Fragment>
            <NavComponent/>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                       <Postcomponent/>
                    </div>
                    <div className="col-3">
                        <h1>World</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Homecomponent