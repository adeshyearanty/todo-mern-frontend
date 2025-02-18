import React from 'react';
import axios from 'axios';

const DeleteTask = ({ taskId, onClose }) => {
    const deleteTask = async () => {
        try {
            await axios.delete(`http://localhost:8080/tasks/${taskId}`);
            onClose(false);
        } catch (err) {
            console.error("Error deleting task:", err);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2 className="modal-title">Delete Task</h2>
                <p className="modal-text">Are you sure you want to delete this task?</p>

                <div className="modal-actions">
                    <button className="button delete-button" onClick={deleteTask}>Delete</button>
                    <button className="button close-button" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteTask;
