import React from "react";

const ToDoItem = ({id, title, completed}) => {
    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className="d-flex justify-content-between">
                <span className="d-flex align-items-center">
                    <input type="checkbox" checked={completed} className="mr-2"></input>
                    {title}
                </span>
                <button className="btn btn-danger">Delete</button>
            </div>

        </li>
    );
};

export default ToDoItem;