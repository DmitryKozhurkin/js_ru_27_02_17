//HOC === Decorator
import React from 'react'

export default (CustomComponent) => class DecoratedComponent extends React.Component {
    state = {
        isOpen: false
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <CustomComponent toggleOpen={this.toggleOpen} {...this.state}  {...this.props} />
    }
}