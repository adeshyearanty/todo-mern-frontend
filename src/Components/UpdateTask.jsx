import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UpdateTask = ({ taskId, onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/tasks/${taskId}`)
            .then((res) => {
                setTitle(res.data.title);
                setDescription(res.data.description);
            })
            .catch((err) => console.error("Error fetching task:", err));
    }, [taskId]);

    const handleEditTask = async () => {
        try {
            await axios.put(`http://localhost:3001/tasks/${taskId}`, { title, description });
            onClose(false);
        } catch (err) {
            console.error("Error updating task:", err);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Update Task</h2>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                
                <label htmlFor="description">Description</label>
                <input 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                />
                
                <button className="button save-button" onClick={handleEditTask}>Save</button>
                <button className="button close-button" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default UpdateTask;
