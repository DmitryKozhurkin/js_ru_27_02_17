import React, {PropTypes, Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

function ArticleList(props) {
    const {articles, openItemId, toggleOpenItem} = props

    const articleComponents = articles.map(article => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === openItemId}
                 toggleOpen={toggleOpenItem(article.id)}
        />
    </li>)

    return (
        <ul>
            {articleComponents}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openItemId: PropTypes.string
}

export default accordion(ArticleList);
