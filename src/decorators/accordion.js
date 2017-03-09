//HOC === Decorator
import React, {Component} from 'react'

//DecoratedComponent я называл чтоб легче понять было. Лучше выбирай более значущее название
export default (CustomComponent) => class DecoratedComponent extends Component {
    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
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
