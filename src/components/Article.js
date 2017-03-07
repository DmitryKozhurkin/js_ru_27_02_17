import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'


function Article(props) {
    const {article, isOpen, toggleOpen} = props
    console.log('Article', article.id);
    const body = isOpen
        ? <section>
            {article.text}
            <CommentList comments={article.comments} isOpen={false}/>
        </section>
        : null
    return (
        <div>
            <h3 onClick={toggleOpen}>{article.title}</h3>
            {body}
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired,
}

export default Article;
