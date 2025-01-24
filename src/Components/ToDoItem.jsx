import React from "react";
import {useDispatch} from 'react-redux';
import { TodoCompleted, DeleteTodo} from "../Redux/TodoSlice";

const ToDoItem = ({id, title, completed}) => {
    const dispatch = useDispatch();

    // handle completed state change events
    const handleCompleted = () => {
        dispatch(TodoCompleted({
            id: id,
            completed: !completed,
        }))
    }

    // handle deletion of the task
    const handleDelete = () => {
        dispatch(DeleteTodo({id: id}))
    }

    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className="d-flex justify-content-between">
                <span className="d-flex align-items-center gap-2">
                    <input type="checkbox"
                    onChange={handleCompleted} 
                    checked={completed} 
                    className="mr-2"></input>
                    {title}
                </span>
                <button 
                className="btn btn-danger"
                onClick={handleDelete}>Delete</button>
            </div>

        </li>
    );
};

export default ToDoItem;