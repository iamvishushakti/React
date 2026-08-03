import { useContext } from "react";
import ProjectToDoContext from "../../../context/project/ProjectToDoContext";

export default function ToDOSubCard({heading, taskmessage, tid, status, btn_name}){

    const {changeReminder} = useContext(ProjectToDoContext)
    return(
        <div className="card-body">
            <h6>{heading}
                
            </h6>
            <small className="text-muted">
                {taskmessage}
            </small>
            <p className="pt-2" style={{float:"right", marginTop:"-20px"}}>
            {status!==''?
            (<button className="btn btn-sm btn-primary" style={{cursor:"pointer"}} onClick={()=>{changeReminder(tid,status)}}>{btn_name}</button>)
            :(<button className="btn btn-sm btn-success">{btn_name}</button>)
            }
            </p>
        </div>
    );
}