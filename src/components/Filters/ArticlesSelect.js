import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import {changeArticlesSelect} from '../../AC/index'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.changeArticlesSelect(selected.map(option => option.value))

    render() {
        const { selected, articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.props.selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.filters.articlesSelect
}), { changeArticlesSelect })(SelectFilter)

