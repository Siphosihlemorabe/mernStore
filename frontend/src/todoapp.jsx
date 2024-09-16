import React, { useState } from "react";

function todoApp() {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [newTask, setNewTask] = useState(""); // State for new task input

  // Handle adding a new task
  const handleAddTask = () => {
    if (!newTask.trim()) return; // Prevent adding empty tasks
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app" style={{ maxWidth: "400px", margin: "auto" }}>
      <h1>To-Do App</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        style={{ padding: "8px", width: "80%" }}
      />
      <button onClick={handleAddTask} style={{ padding: "8px" }}>
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              textDecoration: task.completed ? "line-through" : "none",
              backgroundColor: task.completed ? "#d3ffd3" : "#fff",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span onClick={() => toggleTaskCompletion(index)} style={{ cursor: "pointer" }}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(index)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default todoApp;
