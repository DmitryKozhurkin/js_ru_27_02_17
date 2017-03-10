import React from 'react'
import {render} from 'react-dom'
import ArticleList from './components/ArticleList'
import {articles} from './fixtures'

const openItemId = null //'56c782f17b4e0ba78c7ad717'

render(<ArticleList articles={articles} openItemId={openItemId} />, document.getElementById('container'))