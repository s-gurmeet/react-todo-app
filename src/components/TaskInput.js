import React from "react";

function TaskInput({ newTask, setNewTask, addTask, toggleDarkMode, isDarkMode }) {
  return (
    <div className="task-input-section">
      <input
        type="text"
        placeholder="Enter your task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="task-input"
      />
      <button className="add-task-button" onClick={addTask}>
        Add Task
      </button>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default TaskInput;
