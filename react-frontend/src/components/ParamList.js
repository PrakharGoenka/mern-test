import React, { Component } from 'react'

/*
To be rendered in the leftmost column. It should display the list of Parameters that the selected MS has.
Props : list of parameters that the existing service has(in form of JSON)
Callbacks : A function to handle ClickEvent, when a parameter is selected. The function should be able to convey the selected
Param to the ParentComponent.
*/

class ParamList extends Component {
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
        if(this.props.paramList) {
            list = this.props.paramList
        }
        //construct a list of components, each rendering a parameter
        var params = list.map((item, index) => (
            <div key = {index}>
            <button name = {item} onClick = {this.handleClick} >{item}</button> <br/>
            </div>
        ))
        return params
    }
}

export default ParamList
