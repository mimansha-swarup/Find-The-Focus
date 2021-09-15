import '../style/layout.css'
import ftflogo from "../db-img/Logo/ftf_name.svg"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav>
            <img src={ftflogo} alt="" />

            <ul className="headline6 light">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/project" >Project</NavLink>
                <NavLink to="/analytics" >Analytics</NavLink>
                <NavLink to="/profile" >Profile</NavLink>
            </ul>
        </nav>
     );
}
 
export default NavBar;