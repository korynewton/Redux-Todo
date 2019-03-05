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

    submitHandler = e => {
        e.preventDefault()
        this.props.addTodo(this.state.inputField)
        this.setState({inputField : ''})
    }


    render() {
        return (
            <div>
                <input name='inputField' onChange={this.changeHandler} value={this.state.inputField} type="text"/>
                <button onSubmit={this.submitHandler}>Add To Do item</button>
            </div>
        )
    }
    
}

const mapStateToProps = () => {}

export default connect(mapStateToProps, { addTodo })(InputBar)
