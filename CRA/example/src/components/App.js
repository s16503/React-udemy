import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  counter = 6
  state = {
    tasks:[
      {id: 0,
       text: "task1",
       date: '2022-02-22',
       important: true,
       active: true,
       finishDate: null
      },
      {id: 1,
        text: "task2",
        date: '2019-03-15',
        important: true,
        active: true,
        finishDate: null
       },
       {id: 2,
        text: "task3",
        date: '2018-05-11',
        important: false,
        active: true,
        finishDate: null
       },
       {id: 3,
        text: "task4",
        date: '2022-02-22',
        important: false,
        active: true,
        finishDate: null
       },
       {id: 4,
         text: "task5",
         date: '2019-03-15',
         important: true,
         active: true,
         finishDate: null
        },
        {
         id: 5,
         text: "task6",
         date: '2018-05-11',
         important: false,
         active: true,
         finishDate: null
        },
    ]
  }

 
  deleteTask = (id) => {
    console.log("delete elementu o id: " + id)

  //sposób 1

    // //kopiuję tablicę ze state
    // const tasks = [...this.state.tasks]
    // //znajduję index elementu o danym id
    // const index = tasks.findIndex(task=> task.id === id)
    // //usuwam ten element ze skopiowanej tablicy
    // tasks.splice(index,1)
    // this.setState({tasks})

  //sposób 2 

    //kopia tablicy
    let tasks = [...this.state.tasks]
    //pozostawienie w tablicy tylko tych elementów,
    // które spałniają warunek !==id
    tasks = tasks.filter(task => task.id !== id)
    this.setState({tasks})


  }
  
  changeTaskStatus = (id) => {
    console.log("done elementu o id: " + id)
    //inny sposób kopiowania tablicy
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({tasks})
  }

  addTask = (text, date, important) => {
    // console.log("dodany obiekt")
    const task = {
         id: this.counter,
         text,
         date,
         important,
         active: true,
         finishDate: null
    }
    this.counter++

    this.setState(prevState => ({
      //przypisuję do tasks jej kopię powiększoną o dodatkowy task
      tasks: [...prevState.tasks, task] 
    }))
    return true
  }
 

  render() {
    return (
     <>
     <h1>TODO APP</h1>
      <AddTask add={this.addTask}/>
      <TaskList 
      tasks = {this.state.tasks} 
      delete = {this.deleteTask} 
      change = {this.changeTaskStatus}/>
     </>
    );
  }
}


export default App;