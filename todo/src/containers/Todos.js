import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo } from '../actions'

const Todos = (props) => {
    console.log(props)
  return (
    <>
      {props.todos.map(item => <h5 onClick={() => props.toggleTodo(item.id)} key={item.id}>{item.value}</h5>)}
    </>
  )
}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { toggleTodo })(Todos)
