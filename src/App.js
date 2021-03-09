// import React from 'react';
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Task 1',
          day: 'March 9th at 1:00pm',
          reminder: true
      },
      {
          id: 2,
          text: 'Task 2',
          day: 'March 10th at 1:00pm',
          reminder: false,
      },
      {
          id: 3,
          text: 'Task 3',
          day: 'March 11th at 1:00pm',
          reminder: true
      },
  ])

  const deleteTask = (id) => {
    // console.log('delete', id)

    setTasks(tasks.filter((task) => task.id != id))
  } 

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />):'No tasks to show'}
    </div>
  );
}

// CLASS BASED REACT
// class App extends React.Component{
//   render() {
//     return <h1>Hello From New Class</h1>
//   }
// }

export default App;
