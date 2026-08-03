import ProjectToDoContext from "./ProjectToDoContext";
import React from "react";

export default function ProjectToDoContextProvider({ children }) {
    const [getData, setData] = React.useState(() => {
        const savedData = localStorage.getItem("projectTodoData");
        return savedData ? JSON.parse(savedData) : [];
    });

    
    const [currentProjectOpen, changeCurrentProjectOpen] =
    React.useState(0);

    const changeReminder = React.useCallback((tid, status)=>{
        const cdt = structuredClone(getData);
        const today = new Date().toISOString().split("T")[0];
        cdt[currentProjectOpen].tasks.forEach((e)=>{
            if(e.id===tid){
                e.status = status; 
                e.lastUpdate=today;
            }
        });
        setData(cdt);
    },[getData, currentProjectOpen]);

    const deleteProject = React.useCallback(() => {
        const cda = structuredClone(getData);
        cda.splice(currentProjectOpen, 1);
        setData(cda);
    }, [currentProjectOpen, getData]);

    const createTask = React.useCallback((name, desc)=>{
        const cdt = structuredClone(getData);
        const today = new Date().toISOString().split("T")[0];
        cdt[currentProjectOpen].tasks = [
            {
                id: (cdt[currentProjectOpen].tasks.length)+1,
                title: name,
                desc: desc,
                status: "assigned",
                assignedDate: today,
                lastUpdate: today,
                reminder:false,
            },
            ...cdt[currentProjectOpen].tasks
        ];

        setData(cdt);
    },[getData, currentProjectOpen]);

    const createProject = React.useCallback((projectName)=>{
        const cda = structuredClone(getData);
        const today = new Date().toISOString().split("T")[0];

        setData([{p_name: projectName,tasks: [], craetionDate: today},...cda]);
    },[getData]);

    const currentData = React.useMemo(() => {
        const project = getData[currentProjectOpen];

        if (!project) {
            return null;
        }

        const assigned = [];
        const working = [];
        const completed = [];

        project.tasks.forEach((task) => {
            if (task.status === "assigned") {
                assigned.push(task);
            } else if (task.status === "working") {
                working.push(task);
            } else if (task.status === "completed") {
                completed.push(task);
            }
        });

        return {
            ...project,
            assigned,
            working,
            completed,
        };
    }, [getData, currentProjectOpen]);

    React.useEffect(() => {
        localStorage.setItem("projectTodoData", JSON.stringify(getData));
    }, [getData]);

    return (
        <ProjectToDoContext.Provider
            value={{
                getData,
                setData,
                currentProjectOpen,
                changeCurrentProjectOpen,
                currentData,
                changeReminder,
                createProject,
                createTask,
                deleteProject
            }}
        >
            {children}
        </ProjectToDoContext.Provider>
    );
}