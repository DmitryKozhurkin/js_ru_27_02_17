import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {createComment} from '../AC'



class NewCommentForm extends Component {
    static propTypes = {
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        const {value} = ev.target
        if (!validators[field](value)) return

        this.setState({
            [field]: value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const {createComment, articleId} = this.props
        this.setState({
            user: '',
            text: ''
        })
        createComment(this.state, articleId)
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

const validators = {
    text: (text) => text.length < 150,
    user: (text) => text.length < 10
}

export default connect(null, { createComment })(NewCommentForm)