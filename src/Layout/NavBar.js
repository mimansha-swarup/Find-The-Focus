import '../style/layout.css'
import ftflogo from "../db-img/Logo/ftf_name.svg"

const NavBar = () => {
    return ( 
        <nav>
            <img src={ftflogo} alt="" />

            <ul className="headline6 light">
                <li>Home</li>
                <li>Project</li>
                <li>Analytics</li>
                <li>Profile</li>
            </ul>
        </nav>
     );
}
 
export default NavBar;