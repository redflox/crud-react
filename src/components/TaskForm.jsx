import React, { useState } from 'react';

function TaskForm({ addTask }) {

  const [taskText, setTaskText] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();  
    if (taskText.trim() !== '') {  
      addTask(taskText);  
      setTaskText('');  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}  
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
