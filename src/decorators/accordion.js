//HOC === Decorator
import React, {Component} from 'react'

export default (CustomComponent) => class AccordeonComponent extends Component {
    state = {
        openItemId: this.props.openItemId
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem} />
    }
}
