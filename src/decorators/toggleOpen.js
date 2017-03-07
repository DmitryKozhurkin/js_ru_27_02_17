//HOC === Decorator
import React from 'react'

export default (CustomComponent) => class DecoratedComponent extends React.Component {
    state = {
        isOpen: !! this.props.isOpen
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
    }
}