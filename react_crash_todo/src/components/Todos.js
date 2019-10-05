import React, { Component } from 'react';

class Todos extends Component {
//function Todos() 
render(){
    console.log(this.props.todos)
  return (
    <div className="App">
      <h1> Todos</h1>
    </div>
  );
 }
}

export default Todos;