import react, { Component } from 'react';
import TodoItem from './todoItem';
import PropTypes from 'prop-types';
// function Todos() {
 
  class Todos extends Component {
    

    render(){
      return this.props.todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
      ));
    }
  
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  todos: PropTypes.func.isRequired,
}

export default Todos;
