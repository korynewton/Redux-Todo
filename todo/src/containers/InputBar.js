import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

class InputBar extends React.Component {
    state = {
        inputField : ''
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addTodo = e => {
        e.preventDefault()
        this.props.addTodo(this.state.inputField)
        this.setState({inputField : ''})
    }


    render() {
        return (
            <form onSubmit={this.addTodo}>
                <input name='inputField' onChange={this.changeHandler} value={this.state.inputField} type="text"/>
                <button>Add To Do item</button>
            </form>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(InputBar)
