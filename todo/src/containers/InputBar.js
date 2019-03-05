import React from 'react'
import { connect } from 'react-redux'

class InputBar extends React.Component {
    state = {
        inputField : ''
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (input) => {
        this.props.addTodo(input)
    }


    render() {
        return (
            <div>
                <input name='inputField' onChange={this.changeHandler} value={this.state.inputField} type="text"/>
                <button onSubmit={this.submitHandler(this.state.inputField)}>Add To Do item</button>
            </div>
        )
    }
    
}

const mapStateToProps = () => {}

export default connect(mapStateToProps, { addTodo })(InputBar)
