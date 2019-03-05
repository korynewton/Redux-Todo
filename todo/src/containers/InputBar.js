import React from 'react'

class InputBar extends React.Component {
    state = {
        inputField : ''
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        return (
            <div>
                <input name='inputField' onChange={this.changeHandler} value={this.state.inputField} type="text"/>
                <button>Add To Do item</button>
            </div>
        )
    }
    
}

export default InputBar
