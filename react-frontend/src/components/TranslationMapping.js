import React, { Component } from 'react'
/*
Component to render Attributes of Translation Mapping
*/

class TranslationMapping extends Component {
    state = {

    }

    componentDidMount() {

    }

    handleChange = event => {
        event.preventDefault()
        var update  = {
            'type' : 'Translation',
            'parameter' : {'name' : this.props.mapping.Param, 'index': '0'},
            'newValue' : event.target.value
        }
        this.props.updateAttributes(update)
    }

    render() {
        if(this.props.mapping) {
            return (
                <div>
                    Used as: <input type = 'text' name = 'textbox' value = {this.props.mapping.Attributes.Translation}
                    onChange = {this.handleChange}></input>
                </div>
            )
        } else {
            return 'Error!!'
        }
    }
}

export default TranslationMapping
