import NavBar from "../Layout/NavBar"
import '../style/Project.css';

import { useState } from "react";
import { Link } from 'react-router-dom'
import AllProject from "../Layout/AllProject";


const Projects = () => {
    const [activeState, setActiveState] = useState(1)
    
    
    return ( 
        <div className="project-cont">
            <NavBar/>
            <div className="content-col">
                
            <Link to="/project/add"><button className="primary-btn small new-proj-btn">New Project</button></Link>
                <div className="toggle subtitle2 light">

                    <input className="toggle-input" onClick={()=>setActiveState(1)} checked={activeState===1?true:false} type="radio"  name="project" id="current-project" />
                    <label className="toggle-label" htmlFor="current-project">Current Project</label>
                    <input className="toggle-input" onClick={()=>setActiveState(2)}  checked={activeState===2?true:false} type="radio" name="project" id="all-project" />
                    <label className="toggle-label" htmlFor="all-project">All Projects</label>
                </div>
                {
                    activeState===1? 
                    <div className="content-col">
                        <p className="headline4 regular">Current Project</p>
                        <div className="row-cont">
                            <div style={{height:"230px",width:"430px"}}>fd</div>

                            <div className="row-cont">
                                <ul>
                                    <li className="subtitle1 bold">Milestone</li>
                                    <li className="subtitle2 light">Milestone 1</li>
                                    <li className="subtitle2 light">Milestone 2</li>
                                </ul>
                                <ul>
                                    <li className="subtitle1 bold">Time</li>
                                    <li className="subtitle2 light">11H</li>
                                    <li className="subtitle2 light">2H</li>
                                </ul>
                            </div>
                        </div>
                        <button className="outlined-button medium start-btn button-txt">Start</button>

                    </div>
                    :
                    <AllProject/>
                    

                }
                
            </div>

        </div>
     );
}
 
export default Projects;