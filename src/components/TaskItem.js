// import React from "react";

// function TaskItem({
//   task,
//   editTaskId,
//   editTaskText,
//   setEditTaskText,
//   deleteTask,
//   editTask,
//   saveTask,
//   toggleTaskCompletion,
// }) {
//   return (
//     <li className={task.completed ? "completed" : ""}>
//       <div className="task-content">
//         <input
//           type="checkbox"
//           checked={task.completed}
//           onChange={() => toggleTaskCompletion(task.id)}
//         />
//         {editTaskId === task.id ? (
//           <input
//             type="text"
//             value={editTaskText}
//             onChange={(e) => setEditTaskText(e.target.value)}
//             className="edit-task-input"
//           />
//         ) : (
//           <span
//             className={`task-text ${task.completed ? "completed" : ""}`}
//           >
//             {task.text}
//           </span>
//         )}
//       </div>
//       <div className="task-buttons">
//         {editTaskId === task.id ? (
//           <button className="save-task-button" onClick={() => saveTask(task.id)}>
//             Save
//           </button>
//         ) : (
//           <>
//             <button
//               className="edit-task-button"
//               onClick={() => editTask(task.id, task.text)}
//             >
//               Edit
//             </button>
//             <button
//               className="delete-task-button"
//               onClick={() => deleteTask(task.id)}
//             >
//               Delete
//             </button>
//           </>
//         )}
//       </div>
//     </li>
//   );
// }

// export default TaskItem;

import React from "react";

const TaskItem = ({
  task,
  toggleTaskCompletion,
  editTask,
  deleteTask,
  saveTask,
  editTaskId,
  editTaskText,
  setEditTaskText,
}) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        {editTaskId === task.id ? (
          <input
            type="text"
            value={editTaskText}
            onChange={(e) => setEditTaskText(e.target.value)}
            className="edit-task-input"
          />
        ) : (
          <span className={`task-text ${task.completed ? "completed" : ""}`}>
            {task.text}
          </span>
        )}
      </div>
      <div className="task-buttons">
        {editTaskId === task.id ? (
          <button className="save-task-button" onClick={() => saveTask(task.id)}>
            Save
          </button>
        ) : (
          <>
            <button className="edit-task-button" onClick={() => editTask(task.id, task.text)}>
              Edit
            </button>
            <button className="delete-task-button" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
