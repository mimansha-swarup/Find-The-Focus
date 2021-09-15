import NavBar from "../Layout/NavBar"
import '../style/Profile.css'

import { UserContext } from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import {useContext} from "react"


const Profile = () => {
    const {user} = useContext(UserContext)
    // console.log(user)

    // if(!user?.uid) return <Redirect to="/login" />
    return ( 
        <div className="profile-cont">
            <NavBar/>
            <div className="user-info-cont">
                <img className="avatar" src={user?.photoURL} alt="profile_picture" />
                
                <p className="headline5 regular username">{user?.name}</p>
                <p className="button-text regular email">{user?.email}</p>
                <div className="user-data-info">
                    <div className="user-data-col">
                       <p className="body bold">7</p>
                        <p className="overline regular">Project</p>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="user-data-col">
                       <p className="body bold">11.6hrs</p>
                        <p className="overline regular">Working Time</p>

                    </div>
                    <div className="vertical-line"></div>
                    <div className="user-data-col">
                       <p className="body bold">10</p>
                        <p className="overline regular">Levels</p>
                    </div>
                </div>
                    
                
            </div>

            
        </div>
     );
}
 
export default Profile;