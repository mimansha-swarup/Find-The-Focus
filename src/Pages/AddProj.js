import NavBar from "../Layout/NavBar"
import "../style/Add.css"
import { AiOutlinePlus } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const AddProj = () => {
    return ( 
        <div>

            <NavBar/>
        <div className="add-cont">
           <p className="headline4">Add New Project</p>
           <div className="container-layout">

            <div className="input-cont">
                
                <label className="subtitle1 regular" htmlFor="projectname">Project Name</label>
                <input type="text" name="projectname" id="projectname" className="add-input" placeholder="eg. College Project, Finish Book" /> 
                <label className="subtitle1 regular" htmlFor="milestone">Milestone</label>
                <div className="add-row">
                    <input type="text" name="milestone" id="milestone" className="add-input" placeholder="eg. Back-end, 3 Chapters" />
                    <AiOutlinePlus className="add-btn" />
                </div>
            <label className="subtitle2 regular" htmlFor="dateinpt">Target Date</label>
            <input type="date" name="dateinpt" id="dateinpt" />
            </div>

            <div className="milestone-cont">
               <p className="subtitle1 regular">Milestones Added</p>
               <ul>
                  <li>Desgin Ui <ImCancelCircle style={{marginLeft:"8px"}}/> </li>

               </ul>
               <button className="primary-btn large button-txt regular">Add Project</button>
               <button className="outlined-btn medium button-txt regular discard-btn">Discard</button>
           </div>
           </div>
           
         

        </div>
        </div>
     );
}
 
export default AddProj;