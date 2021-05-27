import react, { Component } from 'react';
import PropTypes from 'prop-types';

// function Todos() {
 
  class TodoItem extends Component {

    getStyle = () => {
        // if(this.props.todo.completed){
        //     return{
        //         textDecoration: 'line-through'
        //     }
        // }else{
        //     return{
        //         textDecoration: 'none'
        //     }
        // }

        return {
            background: '#f4f4f4',
            padding:'10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }

    markComplete(e){
        console.log(this.props)
    }
        // or if we don't want to use bind(this) then use the below arroe function...
    
        // markComplete = (e) =>{
        //     console.log(this.props)
        // } 
            
    render(){
        const{ id, title} = this.props.todo;
      return (
        // <div style = {{ backgroundColor: '#f4f4f4'}}>
        /* // <div style={itemStyle}>  */
        <div style={this.getStyle()}>
          <p>
              {/* <input type='checkbox' onChange={ this.markComplete.bind(this)} /> {' '} */}
              <input type='checkbox' onChange={ this.props.markComplete.bind(this, id)} /> {' '}
              {title}
              <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
          </p>
        </div>
      )
    }
  
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    todos: PropTypes.func.isRequired,
  }

  /* constant style */
//   const itemStyle={
//       backgroundColor: '#f4f4f4'
//   }

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
export default TodoItem;
