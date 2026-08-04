import React from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../../features/todo/todoSlice"

export default function AddToDO() {
    const [todo_text, setTodo] = React.useState('');

    const dispatch = useDispatch();
    const addTodoButton =  ()=>{
        dispatch(addTodo(todo_text));
        setTodo('');
    }
    return (
        <div className=" p-3 mb-4 bg-dark">
            <div className="input-group">
                <input
                    value={todo_text}
                    onChange={(e)=>{setTodo(e.target.value)}}
                    type="text"
                    className="form-control"
                    placeholder="Enter The Todo"
                />

                <button className="btn btn-primary"
                onClick={()=>{addTodoButton()}}>
                    Add Todo
                </button>
            </div>
        </div>
    );
}