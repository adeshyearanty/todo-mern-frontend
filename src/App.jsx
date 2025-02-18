import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CreateTask from './Components/CreateTask';
import UpdateTask from './Components/UpdateTask';
import Home from './Components/Home';
import DeleteTask from './Components/DeleteTask'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks/create" element={<CreateTask />} />
      <Route path="/tasks/edit/:id" element={<UpdateTask />} />
      <Route path="/tasks/delete/:id" element={<DeleteTask />} />
    </Routes>
  );
}

export default App;
