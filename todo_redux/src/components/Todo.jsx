import react from "react";
import ToDoSection from "./Todo_Components/TodoSection";
import { useSelector, useDispatch } from "react-redux";
import {removeTodo} from "../features/todo/todoSlice"

export default function Todo(){
    
    const dispatch = useDispatch();
    const TodoRemoveButton = (id) => {
        dispatch(removeTodo(id));
    };

    const data = useSelector(state => state.todo_data);

    return(<>
    <div className="container">
        <div className="row">
            {data.map((t) => (
                <ToDoSection key={t.id} todo_message={t.todo_text} onDelete={()=>TodoRemoveButton(t.id)}/>  
            ))}
        </div>
    </div>
    </>);
}