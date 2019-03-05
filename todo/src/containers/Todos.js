import React from 'react'

import { connect } from 'react-redux'

const Todos = (props) => {
  return (
    <h4>
      {props.todos.map(item => <h5>{item.value}</h5>)}
    </h4>
  )
}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(Todos)
