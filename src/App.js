import { useState } from 'react';
import Header from './Components/Header'
import Tasks from './Components/Tasks';
import Form from './Components/Form';
import Button from './Components/Button';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => id !== task.id));
}
  const taskComplete = (id) => {
    setTasks(tasks.map((task) => 
    id === task.id ? { ...task, done: !task.done } : task));
  }

  const [tasks, setTasks] = useState([
    {
      name: 'Learn React',
      date: 'Tuesday',
      id: 0,
      done: false,
    },
    {
      name: 'Learn Vue',
      date: 'Thursday',
      id: 1,
      done: false,
    },
    {
      name: 'Learn Angular',
      date: 'Monday',
      id: 2,
      done: false,
    },
    {
      name: 'Learn Node',
      date: 'Wednesday',
      id: 3,
      done: false,
    }
  ]);
  return (
      <div className="App">
        <Header toggle= {toggle} isOpen={isOpen} />
        {isOpen ? <Form isOpen={isOpen} tasks={tasks} setTasks={setTasks} /> : ''}
        <Tasks tasks={tasks} deleteTask={deleteTask} taskComplete={taskComplete} />
        <Button toggle={toggle} isOpen ={isOpen} />
      </div>
  );
}

export default App;
