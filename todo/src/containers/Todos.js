import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo } from '../actions'

const Todos = (props) => {
    console.log(props)
  return (
    <div>
        <h2>Todo list: </h2>
      {props.todos.map(item => <h5 className={(item.completed) ? "completedTodo" : null} onClick={() => props.toggleTodo(item.id)} key={item.id}>{item.value}</h5>)}
    </div>
  )
}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { toggleTodo })(Todos)
