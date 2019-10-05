import React, { Component } from 'react';

class Todos extends Component {
//function Todos() 
render(){
    console.log(this.props.todos)
  return this.props.todos.map((todo) => (
        <h3>{todo.title}</h3>

  ));
 }
}

export default Todos;