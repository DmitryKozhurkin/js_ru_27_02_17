import React, { Component } from 'react'

class CommentForm extends Component {

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <div>
                <h4>New comment:</h4>
                <input type="text" name="user" value={this.state.user} onChange={this.handleTextChange}/>
                <br />
                <textarea name="text" value={this.state.text} onChange={this.handleTextChange}/>
            </div>
        )
    }

    handleTextChange = (ev) => {
        const { name, value } = ev.target
        if (name === 'user' && value.length > 10) return
        if (name === 'text' && value.length > 150) return
        this.setState({
            ...this.state,
            [name] : value
        })
    }
}

export default CommentForm