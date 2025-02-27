import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateTask from './UpdateTask';
import DeleteTask from './DeleteTask';
import CreateTask from './CreateTask';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showEdit, setShowEdit] = useState(null); 
    const [showDelete, setShowDelete] = useState(null);

    useEffect(() => {
        axios.get(`https://todo-mern-backend-mqpe.onrender.com/tasks`)
            .then(response => setTasks(response.data.data))
            .catch(error => console.error(error));
    }, [tasks]);

    return (
        <div>
            <nav className="navbar">
                <h1 className="heading">Todo List</h1>
                <button onClick={() => setShowCreate(true)} className="button">Create</button>
            </nav>

            {/* Table */}
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="sno">S. No.</th>
                            <th className="title">Title</th>
                            <th className="description">Description</th>
                            <th className="operations">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={task._id}>
                                <td className="sno">{index + 1}</td>
                                <td className="title">{task.title}</td>
                                <td className="description">{task.description}</td>
                                <td className="buttons">
                                    <button className="button edit-button" onClick={() => setShowEdit(task._id)}>Edit</button>
                                    <button className="button delete-button" onClick={() => setShowDelete(task._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showCreate && <CreateTask onClose={() => setShowCreate(false)} />}
            {showEdit && <UpdateTask taskId={showEdit} onClose={() => setShowEdit(null)} />}
            {showDelete && <DeleteTask taskId={showDelete} onClose={() => setShowDelete(null)} />}
        </div>
    );
};

export default Home;
