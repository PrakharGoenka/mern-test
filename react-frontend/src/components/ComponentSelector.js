import React, { Component } from 'react'
import TranslationMapping from './TranslationMapping'
/*
Component to select which Mapping Attribute to render on the right most column.
*/

class ComponentSelector extends Component {
    state = {

    }

    componentDidMount() {

    }
    
    updateAttributes = (key, value) => {
        this.props.updateAttributes(key, value)
    }

    render() {
        if(this.props.mapping) {
            // Implement logic to select which component to render in the rightmost column.
            return <TranslationMapping mapping = {this.props.mapping} updateAttributes = {this.updateAttributes}/>
        }
        return <div> Error !!!</div>
    }
}

export default ComponentSelector
