import { useState } from 'react';
import Header from './Components/Header'
import Tasks from './Components/Tasks';
import Form from './Components/Form';
import Button from './Components/Button';
import Close from './Components/Button';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [tasks, setTasks] = useState([
    {
      name: 'Learn React',
      date: 'Tuesday',
      id: 0,
    },
    {
      name: 'Learn Vue',
      date: 'Thursday',
      id: 1,
    },
    {
      name: 'Learn Angular',
      date: 'Monday',
      id: 2,
    },
    {
      name: 'Learn Node',
      date: 'Wednesday',
      id: 3,
    }
  ]);
  return (
      <div className="App">
        <Header toggle= {toggle} isOpen={isOpen} />
        {isOpen ? <Form isOpen={isOpen} tasks={tasks} setTasks={setTasks} /> : ''}
        <Tasks tasks={tasks} />
        {isOpen ? <Close toggle={toggle} isOpen ={isOpen} /> 
        : <Button toggle={toggle} isOpen ={isOpen} />}
      </div>
  );
}

export default App;
