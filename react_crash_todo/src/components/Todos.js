import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; //proptypes is a validation for properties that a component should have. We can set the type and set to be required or not. 

class Todos extends Component {
//function Todos() 
render(){
    console.log(this.props.todos)
  return this.props.todos.map((todo) => ( // when we map through something it creates a list which should have unique keys. We have access to Todo which is unquie and has an id. 
       < TodoItem key={todo.id} todo={todo}/>

  ));
 }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired 
}


export default Todos;