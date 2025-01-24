import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/TodoSlice';
const AddToDOForm = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', + task);
        dispatch(addTodo({title: task}));
    }

    return (
        <form onSubmit={handleSubmit} className='form-inline mt-3 mb-3'>
            <label className='sr-only'>Name</label>
            <input type="text" value={task} 
            onChange={(e) => setTask(e.target.value)}
            className='form-control mb-2 mr-sm-2' 
            placeholder='Add task...'/>

            <button type='onSubmit' className='btn btn-primary mb-2'>
                Submit
            </button>
        </form>
    )
}

export default AddToDOForm;