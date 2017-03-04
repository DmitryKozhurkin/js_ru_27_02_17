import React from 'react'

export default (props) => {
    const {comment} = props

    return (
        <li key={comment.id}>
            <h4>{comment.user}</h4>
            <small>{comment.text}</small>
        </li>
    )
}