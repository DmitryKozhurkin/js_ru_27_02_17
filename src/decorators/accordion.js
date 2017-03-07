//HOC === Decorator
import React, {Component} from 'react'

export default (CustomComponent) => class DecoratedComponent extends Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({
            openArticleId
        })
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
    }
}