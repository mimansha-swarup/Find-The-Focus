import FtfLogo from "../db-img/Logo/ftf_name.svg"
import '../style/login.css';
import GoogleLogo from "../db-img/Logo/google.svg"
// import FbLogo from "../db-img/Logo/facebook.svg"

import {useContext} from "react"
import {localAuth,authProviderGoogle} from "../Config/FirebaseConfig"
import  {signInWithPopup} from "firebase/auth";
import { UserContext } from "../Context/UserContext";
import { Redirect } from "react-router-dom";

const LoginPg = () => {

    // const [usercredential, setUserCredential] = useState({});
    const {user,setUser} = useContext(UserContext)
    
   
   
    const GoogleLogInPopUP = ()=>{
     
      //   .then(res=>setUser({...user,uid:res.user?.uid}))
      signInWithPopup(localAuth,authProviderGoogle)
      .then(res=>setUser({
          ...user,
          uid:res.user?.uid,
          name:res.user?.displayName,
          email:res.user?.email,
          photoURL:res.user?.photoURL
        })
      )
   
      .catch(err=>console.log(err.message))
    }
    
    // if(user?.uid) return <Redirect to="/" />

    return ( 
        <div className="login-cont">
          <div className="login-layout">
            <img src={FtfLogo} alt="logo"  />
            <button onClick={GoogleLogInPopUP} className="large-cta medium button-txt regular google-login-btn">
            <img className="google-logo" src={GoogleLogo} alt="" />
                Google
            <img style={{visibility:"hidden"}} className="google-logo" src={GoogleLogo} alt="" />
            
                </button>
            </div>
            <div className="login-grad-circle1"></div>
            <div className="login-grad-circle2"></div>
        </div>
     );
}
 
export default LoginPg;