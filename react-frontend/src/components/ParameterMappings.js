import React, { Component } from 'react'
 /*
 This component renders a list of names of the current mappings associated with the selected parameter.
 */

class ParameterMappings extends Component {
    state = {

    }

    componentDidMount() {

    }

    handleClick = event => {
        event.preventDefault()
        this.props.onClick(event.target.name)
    }

    render() {
        //begin with empty list, to handle the case that props are not passed
        var list = []
        //if props have parameter list, then update 'list'
        if(this.props.parameterMappings) {
            list = this.props.parameterMappings
        }
        //construct a list of components, each rendering a parameter
        var mappings = list.map((item, index) => (
            <div key = {index} >
            <button name = {index} onClick = {this.handleClick} >{item.Type}</button> <br/>
            </div>
        ))
        return mappings       
    }
}

export default ParameterMappings
