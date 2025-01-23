import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    const todos = [
        {id: 1, title: 'Task 1', completed: false},
        {id: 2, title: 'Task 2', completed: true},
        {id: 3, title: 'Task 3', completed: false},
        {id: 4, title: 'Task 4', completed: true},
        {id: 5, title: 'Task 5', completed: false},
    ]

    return (
        <ul className='list-group'>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </ul>
    )
}

export default ToDoList;