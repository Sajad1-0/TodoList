import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDOForm from './Components/ToDoform';
import ToDoList from './Components/ToDoList';
import TotalCompleteItems from './Components/TotalCompleteTask';


function App() {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>To-Do List</h1>
      <AddToDOForm />
      <ToDoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;
