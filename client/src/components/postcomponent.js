import { useEffect } from "react"

const Postcomponent = () =>{
    const loaddata = async () =>{
        const result = await axios.get
    }
    useEffect(() => {
        loaddata()
        const result = await 
      },[]);
    return(
        <div class="ui card">
            <div class="content">
                <div class="right floated meta">14h</div>
                <img className="ui avatar image" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"/> Elliot
                Elliot
            </div>
        <div class="image">
        <img src="https://media.istockphoto.com/photos/happy-people-in-nature-a-woman-feeling-and-touching-the-ocean-water-picture-id1299887977?s=612x612"/>
        </div>
        <div class="content">
            <span class="right floated">
            <i class="heart outline like icon"></i>
            17 likes
            </span>
            <i class="comment icon"></i>
            3 comments
        </div>
        <div class="extra content">
            <div class="ui large transparent left icon input">
            <i class="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..."/>
            </div>
        </div>
        </div>
    )
}
export default Postcomponent