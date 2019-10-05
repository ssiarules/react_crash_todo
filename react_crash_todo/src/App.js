import React, { Component} from 'react';

import Todos from './components/Todos';

import './App.css';

class App extends Component{

//function App() 
  state = {
    todos: [
      {
        id: 1, 
        title: 'Write in Todays Agenda',
        completed: false 
      },
      {
        id: 2, 
        title: 'Daily Workout',
        completed: true
      },
      {
        id: 3, 
        title: 'Work on Flatiron coursework',
        completed: false 
      },
    ]
  }
    render(){
      console.log(this.state.todos)
  return (
    <div className="App">
      <h1> To Do List!</h1>
      <Todos todos={this.state.todos} />
    </div>
  );
 }
}

export default App;
