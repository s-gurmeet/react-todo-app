// import React from "react";
// import TaskItem from "./TaskItem";

// function TaskList({
//   tasks,
//   editTaskId,
//   editTaskText,
//   setEditTaskText,
//   deleteTask,
//   editTask,
//   saveTask,
//   toggleTaskCompletion,
// }) {
//   return (
//     <ul className="task-list">
//       {tasks.map((task) => (
//         <TaskItem
//           key={task.id}
//           task={task}
//           editTaskId={editTaskId}
//           editTaskText={editTaskText}
//           setEditTaskText={setEditTaskText}
//           deleteTask={deleteTask}
//           editTask={editTask}
//           saveTask={saveTask}
//           toggleTaskCompletion={toggleTaskCompletion}
//         />
//       ))}
//     </ul>
//   );
// }

// export default TaskList;
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTaskCompletion, editTask, deleteTask, saveTask, editTaskId, editTaskText, setEditTaskText }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}
          deleteTask={deleteTask}
          saveTask={saveTask}
          editTaskId={editTaskId}
          editTaskText={editTaskText}
          setEditTaskText={setEditTaskText}
        />
      ))}
    </ul>
  );
};

export default TaskList;
