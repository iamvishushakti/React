
import ToDOSubCard from "./TodoSubCard";
import ProjectToDoContext from "../../../context/project/ProjectToDoContext";
import { useContext } from "react";

export default function ToDoCard() {
    const  {currentData}= useContext(ProjectToDoContext);
    return (
        <div className="row g-3">

            {/* ================= TO DO ================= */}
            <div className="col-md-4">
                <div
                    className="card border-0 shadow-sm h-100"
                    style={{ minHeight: "400px" }}
                >
                    <div className="card-body to-do bg-body-secondary">
                        <h6 className="text-muted fw-bold mb-3">
                            🕐 To Do
                        </h6>
                        <div className="d-flex flex-column gap-2 to-do-subtask">
                            {currentData.assigned.map((d, index)=>(
                                <ToDOSubCard key={d.id}
                                    heading={d.title}
                                    taskmessage={d.desc}
                                    tid={d.id}
                                    status="working"
                                    btn_name="Start Task"
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>


            {/* ================= IN PROGRESS ================= */}
            <div className="col-md-4">
                <div
                    className="card border-0 shadow-sm h-100"
                    style={{ minHeight: "400px" }}
                >
                    <div className="card-body to-do bg-body-secondary">

                        <h6 className="text-muted fw-bold mb-3">
                            ⚡ In Progress
                        </h6>

                        <div className="d-flex flex-column gap-2  to-do-subtask">
                            {currentData.working.map((d)=>(
                                <ToDOSubCard key={d.id}
                                    heading={d.title}
                                    taskmessage={d.desc}
                                     tid={d.id}
                                    status="completed"
                                    btn_name="Complete Task"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* ================= COMPLETED ================= */}
            <div className="col-md-4">
                <div
                    className="card border-0 shadow-sm h-100"
                    style={{ minHeight: "400px" }}
                >
                    <div className="card-body to-do bg-body-secondary">
                        <h6 className="text-muted fw-bold mb-3 ">
                            ✅ Completed
                        </h6>
                        <div className="d-flex flex-column gap-2  to-do-subtask">
                            {currentData.completed.map((d)=>(
                                <ToDOSubCard key={d.id}
                                    heading={d.title}
                                    taskmessage={d.desc}
                                    tid={d.id}
                                    status=""
                                    btn_name="Completed Task"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}