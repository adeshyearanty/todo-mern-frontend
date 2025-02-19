import React, { useState } from "react";
import axios from "axios";

const CreateTask = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSaveTask = async () => {
        try {
            await axios.post("http://localhost:3001/tasks", { title, description });
            onClose(false);
            window.location.reload();
        } catch (err) {
            console.error("Error saving task:", err);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Create Task</h2>
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
                
                <button className="button save-button" onClick={handleSaveTask}>Save</button>
                <button className="button close-button" onClick={() => onClose(false)}>Cancle</button>
            </div>
        </div>
    );
};

export default CreateTask;
