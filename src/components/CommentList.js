import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {comments} = this.props
        const {isOpen} = this.state

        let commentComponents, switcherText

        if (isOpen) {
            //comments может быть undefined
            commentComponents = comments.map(comment => <Comment key={comment.id} comment={comment} />)
            switcherText = 'Скрыть комменты'
        } else {
            commentComponents = null;
            switcherText = 'Показать комменты'
        }

        return (
            <div>
                <a href="#comments" onClick={this.handleClick}>{switcherText}</a>
                <ul>
                    {commentComponents}
                </ul>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList
