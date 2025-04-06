import { useState, useEffect } from "react";
import "animate.css";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Chargement depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));

    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.className = darkMode
      ? "bg-dark text-light"
      : "bg-light text-dark";
  }, [darkMode]);

  const addTask = () => {
    if (newTask.trim() === "") return;

    const taskObject = { text: newTask, done: false };
    setTasks([taskObject, ...tasks]);
    setNewTask("");
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    if (window.confirm("Supprimer toutes les tâches ?")) {
      setTasks([]);
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📝 Ma To-Do List</h2>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            {darkMode ? "🌙 Mode sombre" : "☀️ Mode clair"}
          </label>
        </div>
      </div>

      <div className="input-group mb-3 shadow-sm">
        <input
          type="text"
          className="form-control"
          placeholder="Nouvelle tâche..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="btn btn-success" onClick={addTask}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <ul className="list-group mb-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn ${
              darkMode ? "bg-secondary text-light" : ""
            }`}
            onClick={() => toggleDone(index)}
            style={{ cursor: "pointer" }}>
            <span
              className={
                task.done ? "text-decoration-line-through text-muted" : ""
              }>
              {task.text}
            </span>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(index);
              }}>
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <div className="text-center">
          <button className="btn btn-outline-secondary" onClick={clearTasks}>
            <i className="bi bi-x-circle me-2"></i> Supprimer toutes les tâches
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoApp;
