import SidebarProject from "./Home/SidebarProject";
import ToDoCard from "./Home/ToDoCard";

import ProjectToDoContext from "../../context/project/ProjectToDoContext";
import { useContext, useState } from "react";

export default function Home() {
    const  {currentData, createProject, createTask, deleteProject}= useContext(ProjectToDoContext);
    const [projectName, setProjectName] = useState('');
    const [projectTaskName, setProjectTaskName] = useState('');
    const [projectTaskDesc, setProjectTaskDesc] = useState('');

    return (
        <div className="container-fluid">
            <div className="row min-vh-100">

                {/* Sidebar */}
                <div className="col-md-3 col-lg-2 bg-light border-end p-3">

                    <h5 className="fw-bold mb-4">
                        My Projects
                    </h5>
                    <SidebarProject />
                    <div className="p-2 mt-4 bg-body-secondary">
                        <input value={projectName} placeholder="Enter Project Name" type="text" className="form-control" onChange={(e)=>{setProjectName(e.target.value)}}/>
                        <button className="btn btn-success w-100 mt-1 "
                        onClick={()=>{
                            setProjectName(''); 
                            createProject(projectName); 
                            }} 
                            disabled={projectName===''?true:false}>
                            + Add Project
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-md-9 col-lg-10 p-4">

                    {currentData!==null?
                        (<>
                            <div className="mb-4">
                                <div className="row">
                                    <div className="col-md 4">
                                        <div>
                                            <h3 className="fw-bold mb-1">
                                                {currentData.p_name}
                                            </h3>
                                            <p className="text-muted mb-0">
                                                Manage your tasks
                                            </p>
                                        </div>

                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" value={projectTaskName} className="form-control" placeholder="Enter the task name" onChange={(e)=>{setProjectTaskName(e.target.value)}}/>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" value={projectTaskDesc} className="form-control" placeholder="Enter the description" onChange={(e)=>{setProjectTaskDesc(e.target.value)}}/>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-primary" onClick={()=>{setProjectTaskName(''); setProjectTaskDesc(''); createTask(projectTaskName, projectTaskDesc)}} disabled={projectTaskDesc==='' || projectTaskName===''?true:false }>
                                            + Add Task
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ToDoCard />
                            <p className="pt-4">
                                <small>
                                    Project Start Date: {currentData.craetionDate}
                                </small> |
                                <small>
                                    Pending Task:{currentData.assigned.length} | 
                                    Under Process: {currentData.working.length} | 
                                    completed Task: {currentData.completed.length} | 
                                </small>
                                <button
                                    className="btn btn-danger"
                                    style={{ float: "right" }}
                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to delete this project?")) {
                                            deleteProject();
                                        }
                                    }}
                                >
                                    Delete Project
                                </button>
                            </p>
                        </>)
                    :(<>First Create a project</>)}
                </div>
            </div>
        </div>
    );
}