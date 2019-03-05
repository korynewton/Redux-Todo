import React from 'react'

import { connect } from 'react-redux'

const Todos = (props) => {
  return (
    <>
      {props.todos.map(item => <h5 key={item.id}>{item.value}</h5>)}
    </>
  )
}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(Todos)
