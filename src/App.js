import logo from './logo.svg';
import './App.css';
import Updater from './com/updater';
import { useState, useEffect } from "react";
import axios from 'axios';
import List from './com/List';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  const addTask = async (task) => {
    const res = await axios.post('http://localhost:5000/api/tasks', task);
    setTasks([...tasks, res.data]);
  };
  const updateTask = async (id, updatedTask) => {
    const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
    setTasks(tasks.map(task => (task._id === id ? res.data : task)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [add, setAdd] = useState(true);
  const [editId, setEditId] = useState(null);

  return (
    <div className="App">
      <Updater 
        add={add} title={title} setTitle= {setTitle} 
        description ={description} setDescription={setDescription} 
        addTask ={addTask} updateTask ={updateTask}
        editId={editId} setAdd={setAdd}
      />
      <List setAdd={setAdd} setTitle={setTitle} setDescription={setDescription}
         tasks = {tasks} setEditId = {setEditId} deleteTask = {deleteTask}
      />
    </div>
  );
}

export default App;
