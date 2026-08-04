import react from "react";


export default function ToDoSection(props) {
    return (
        <div className=" col-md-4 ">
            <div className="card ">
                <div className="  bg-info card-body d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">
                        {props.todo_message}
                    </span>

                    <button 
                        className="btn btn-danger btn-sm"
                        onClick={()=> props.onDelete()}
                    >
                        Delete
                    </button>

                </div>
            </div>
        </div>
    );
}