import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends Component {

  getStyle = () => {
    //Ternary operator 
      return {
        background: '#f4f4f4',
        padding: '10px',
        textDecoration: this.props.todo.completed ? 'line-through ' : 'none'
        
      }
  }

    /*
    Longer way to code function for getStyle 
    if(this.props.todo.completed){
        return {
          textDecoration: 'line-through'
       }
    } else {
      return{
        textDecoration: 'none'
      }
    }
  } 
*/

  render() {
    return (
      <div style={this.getStyle()}> 
        <p> {this.props.todo.title}</p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired 
}

// creating a constant variable for the background color, we will than use it in the div style={itemStyle}
//const itemStyle = {
 // backgroundColor: '#f4f4f4'
//}

export default TodoItem ;
