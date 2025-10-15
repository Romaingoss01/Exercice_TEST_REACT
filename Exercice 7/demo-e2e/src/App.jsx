import './App.css'
import Counter from './Counter'
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");



  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };



  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };
  

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Todo</h1>
      <input placeholder="New task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
      <button onClick={addTask}>Ajout</button>
      <ul style={{ listStyle: "none", padding: 0 }}>

        {tasks.length === 0 ? (
          <p>Aucune tâche</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button onClick={() => deleteTask(index)}>Supprimer</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
export default App;
