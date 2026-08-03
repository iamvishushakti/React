import ProjectToDoContext from "../../../context/project/ProjectToDoContext";
import { useContext } from "react";

export default function SidebarProject(){
    const  {getData, currentProjectOpen, changeCurrentProjectOpen}= useContext(ProjectToDoContext);
    return (
        <div className="list-group">
            {
                getData.map((d, index) => {
                    return (
                        <button
                            key={index}
                            className={`list-group-item list-group-item-action 
                                ${
                                currentProjectOpen === index ? 'active' : ''
                                }
                            `}
                            onClick={()=>{changeCurrentProjectOpen(index)}}
                        >
                            {d.p_name}
                        </button>
                    );
                })
            }
        </div>
    );
}