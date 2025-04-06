import { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📝 To-Do List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nouvelle tâche..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Ajouter
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTask(index)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
