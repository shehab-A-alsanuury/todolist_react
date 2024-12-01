import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function HandleInputChange(e) {
    setNewTask(e.target.value);
  }

  function AddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask.trim()]);
      setNewTask("");

      // SweetAlert for adding a task
      Swal.fire({
        icon: "success",
        title: "Task Added!",
        text: `You successfully added "${newTask.trim()}" to your list.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Task cannot be empty.",
      });
    }
  }

  function DeleteTask(index) {
    const taskToDelete = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);

    // SweetAlert for deleting a task
    Swal.fire({
      icon: "info",
      title: "Task Deleted!",
      text: `"${taskToDelete}" has been removed from your list.`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  function MoveTasksUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function MoveTasksDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <h1 className="todo-title">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a Task"
          value={newTask}
          onChange={HandleInputChange}
          className="task-input"
        />
        <button onClick={AddTask} className="add-btn">
          Add Task
        </button>
      </div>
      <ol className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <div className="task-buttons">
              <button onClick={() => DeleteTask(index)} className="delete-btn">
                Delete
              </button>
              <button onClick={() => MoveTasksUp(index)} className="move-up-btn">
                Up
              </button>
              <button onClick={() => MoveTasksDown(index)} className="move-down-btn">
                Down
              </button>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ToDoList;
