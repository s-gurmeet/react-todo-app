
  // import React, { useState } from "react";
  // import "./App.css";
  
  // function App() {
  //   const [tasks, setTasks] = useState([]);
  //   const [newTask, setNewTask] = useState("");
  //   const [isDarkMode, setIsDarkMode] = useState(false);
  //   const [editTaskId, setEditTaskId] = useState(null);
  //   const [editTaskText, setEditTaskText] = useState("");
  
  //   const toggleDarkMode = () => {
  //     setIsDarkMode(!isDarkMode);
  //     document.body.classList.toggle("dark-mode", !isDarkMode);
  //   };
  
  //   const addTask = () => {
  //     if (newTask.trim() !== "") {
  //       setTasks([
  //         ...tasks,
  //         { id: Date.now(), text: newTask.trim(), completed: false },
  //       ]);
  //       setNewTask("");
  //     }
  //   };
  
  //   const deleteTask = (id) => {
  //     setTasks(tasks.filter((task) => task.id !== id));
  //   };
  
  //   const editTask = (id, text) => {
  //     setEditTaskId(id);
  //     setEditTaskText(text);
  //   };
  
  //   const saveTask = (id) => {
  //     setTasks(
  //       tasks.map((task) =>
  //         task.id === id ? { ...task, text: editTaskText.trim() } : task
  //       )
  //     );
  //     setEditTaskId(null);
  //     setEditTaskText("");
  //   };
  
  //   const toggleTaskCompletion = (id) => {
  //     setTasks(
  //       tasks.map((task) =>
  //         task.id === id ? { ...task, completed: !task.completed } : task
  //       )
  //     );
  //   };
  
  //   return (
  //     <div className="app-container">
  //       <div className="background-box">
  //         <header>
  //           <h1>TO-DO-LIST</h1>
  //         </header>
  //         <div className="task-input-section">
  //           <input
  //             type="text"
  //             placeholder="Enter your task..."
  //             value={newTask}
  //             onChange={(e) => setNewTask(e.target.value)}
  //             className="task-input"
  //           />
  //           <button className="add-task-button" onClick={addTask}>
  //             Add Task
  //           </button>
  //           <button className="dark-mode-toggle" onClick={toggleDarkMode}>
  //             {isDarkMode ? "☀️" : "🌙"}
  //           </button>
  //         </div>
  
  //         <ul className="task-list">
  //           {tasks.map((task) => (
  //             <li key={task.id} className={task.completed ? "completed" : ""}>
  //               <div className="task-content">
  //                 <input
  //                   type="checkbox"
  //                   checked={task.completed}
  //                   onChange={() => toggleTaskCompletion(task.id)}
  //                 />
  //                 {editTaskId === task.id ? (
  //                   <input
  //                     type="text"
  //                     value={editTaskText}
  //                     onChange={(e) => setEditTaskText(e.target.value)}
  //                     className="edit-task-input"
  //                   />
  //                 ) : (
  //                   <span
  //                     className={`task-text ${
  //                       task.completed ? "completed" : ""
  //                     }`}
  //                   >
  //                     {task.text}
  //                   </span>
  //                 )}
  //               </div>
  //               <div className="task-buttons">
  //                 {editTaskId === task.id ? (
  //                   <button
  //                     className="save-task-button"
  //                     onClick={() => saveTask(task.id)}
  //                   >
  //                     Save
  //                   </button>
  //                 ) : (
  //                   <>
  //                     <button
  //                       className="edit-task-button"
  //                       onClick={() => editTask(task.id, task.text)}
  //                     >
  //                       Edit
  //                     </button>
  //                     <button
  //                       className="delete-task-button"
  //                       onClick={() => deleteTask(task.id)}
  //                     >
  //                       Delete
  //                     </button>
  //                   </>
  //                 )}
  //               </div>
  //             </li>
  //           ))}
  //         </ul>

  //       </div>
  //     </div>
  //   );
  // }
  
  // export default App;
  

  import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, text) => {
    setEditTaskId(id);
    setEditTaskText(text);
  };

  const saveTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editTaskText.trim() } : task
      )
    );
    setEditTaskId(null);
    setEditTaskText("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <div className="background-box">
        <Header />
        <TaskInput
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        <TaskList
          tasks={tasks}
          editTaskId={editTaskId}
          editTaskText={editTaskText}
          setEditTaskText={setEditTaskText}
          deleteTask={deleteTask}
          editTask={editTask}
          saveTask={saveTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </div>
    </div>
  );
}

export default App;
