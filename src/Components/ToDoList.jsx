import React from 'react';
import ToDoItem from './ToDoItem';
import { useSelector } from 'react-redux';

const ToDoList = () => {
    const todos = useSelector((state) => state.todos)
  
    

    return (
        <ul className='list-group'>
            {todos.map((todo) => (
                <ToDoItem id={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </ul>
    )
}

export default ToDoList;