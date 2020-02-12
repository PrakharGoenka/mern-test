import React, { Component } from 'react'
import { Form, Container, Row, ButtonGroup, Button } from 'react-bootstrap'
import MonacoEditor from 'react-monaco-editor';
import Multiselect from './Multiselect'
/*
Component to render Attributes of Translation Mapping
*/

class MappingAttributes extends Component {
    state = {
        
    }

    componentDidMount() {

    }

    handleCode = value => {
        this.props.handleCode(value)
    }

    handleClick = event => {
        event.preventDefault()
        var name = event.target.name
        var args = this.props.microserviceMapping.attributes.arguments

        if(name === 'add') {
            args.push(null)
            this.props.handleArguments(args)
        } else if(name === 'remove') {
            args.pop()
            this.props.handleArguments(args)
        }
    }

    render() {
        const options = {
            selectOnLineNumbers: true
        }

        return (
                <Container>
                    <Row>
                        < Multiselect
                            args = {this.props.microserviceMapping.attributes.arguments}
                            parameters = {this.props.microserviceB.parameters}
                            handleArguments = {this.props.handleArguments}
                        />
                    </Row>
                    <br/>
                    <Row>
                        <ButtonGroup>
                            <Button variant='outline-dark' size='ls' name='add' onClick={this.handleClick}> Add </Button>
                            <Button variant='outline-secondary' size='ls' name='remove' onClick={this.handleClick}> Remove </Button>
                        </ButtonGroup>
                    </Row>
                    <br/>
                    <Row>
                        <Form.Group controlId='code'>
                            <Form.Label> Mapping Function </Form.Label>
                            <MonacoEditor
                                height="400"
                                width="600"
                                language="javascript"
                                theme="vs-dark"
                                defaultValue=""
                                value={this.props.microserviceMapping.attributes.code}
                                onChange={this.handleCode}
                                options={options}
                            />
                        </Form.Group>
                    </Row>                    
                </Container>
        )        
    }
}

export default MappingAttributes
