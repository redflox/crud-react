import React, { useState } from 'react';

function Task({ task, index, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false); 
  const [newText, setNewText] = useState(task.text); 

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(index, newText); 
    setIsEditing(false); 
  };

  const handleCancel = () => {
    setIsEditing(false); 
    setNewText(task.text); 
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={handleEdit}>Editar</button>
        </>
      )}
      <button onClick={() => deleteTask(index)}>Eliminar</button>
    </li>
  );
}

export default Task;
