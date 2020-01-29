import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ParamList from './ParamList'
import ParameterMappings from './ParameterMappings'
import ComponentSelector from './ComponentSelector'

/* 
Note: This page should mainly contain only two buttons 1. Submit 2. Cancel. All the data that gets updated,
all the mappings added, edited, removed should be reflected in a state attribute. If the user presses Submit
button, send a post request with that state attribute(with or without validations.)

A container to implement mapping of all the parameters of a microservice. It has 3 columns.

Leftmost: Renders ParamList component. Gives it the list of parameters as props, along with a callback function that
updates the state variable "Selected Parameter"

Middle: Renders ParameterMappings component. Props: list of existing mappings. Callbacks for add/ edit/ delete a mapping,
and for handleClick to return the selected mapping.

Rightmost: Renders the MappingsAttribute component. 
    Decide between :
        1. Update state onChange vs Update state when a done button is pressed.
        2. Implement 'selection' of 'component' that displays a mapping's attributes(each mapping type has different component)
            in ServiceMapping vs in MappingsAttribute i.e. Implementing logic at a place not intended for it vs adding an extra
            level in callbacks.
    when going for options 1 and 2 in respective.
    Pass props to the MappingsAttribute component for : The type and attributes of the mapping. Callbacks: To handle changes in
    attributes. The mappings attribute component passes the props after deciding the suitable component to render the 
    mapping's attributes.
 
*/

class ServiceMapping extends Component {
    state = {
        parameter: null,
        mapping_index: null,
        microservice: this.props.Microservice,
    }

    componentDidMount() {
        
    }

    selectParam = param => {
        this.setState({
            parameter: param,
            mapping_index: null
        })
    }

    selectMapping = index => {
        this.setState({
            mapping_index: index
        })
    }

    updateAttributes = (update) => {
        if(update.type === "Translation") {
            this.setState((state) => {
                var {name, index} = update.parameter
                state['microservice']['Mappings'][name][index]['Attributes']['Translation'] = update.newValue
                return state
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(event.target.name === 'submit') {
            console.log('Mapping has been updated.')
            console.log(this.state.microservice)
        } else {
            console.log('Process cancelled.')
            // Route to homepage etc.
        }
    }

    render() {
        var { microservice, parameter, mapping_index } = this.state
        var mapping = null
        if(mapping_index !== null) {
            mapping = microservice.Mappings[parameter][mapping_index]
        }
        return (
            <Container>
                <Row>
                    <Col>{microservice !== null  && (<h3> Parameters</h3>)} </Col>
                    <Col>{parameter !== null  && (<h3> Mappings Associated</h3>)} </Col>
                    <Col>{mapping_index !== null  && (<h3> Attributes</h3>)} </Col>
                </Row>
                <Row>
                    <Col> 
                        <ParamList paramList = {microservice.Parameters} onClick = {this.selectParam}/>
                    </Col>
                    <Col> 
                        {(parameter) &&  <ParameterMappings parameterMappings = {microservice.Mappings[parameter]}
                        onClick = {this.selectMapping }/> }
                    </Col>
                    <Col>
                        {(mapping) && <ComponentSelector mapping = {mapping} updateAttributes = {this.updateAttributes}/>}
                    </Col>
                </Row>
                <Row>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> <button type='submit' name='submit' onClick={this.handleSubmit}> Submit </button>
                          <button type='submit' name='cancel' onClick={this.handleSubmit}> Cancel </button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ServiceMapping;
