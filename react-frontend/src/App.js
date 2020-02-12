import React, { Component } from 'react';
import ServiceMapping from './components/ServiceMapping'

class App extends Component {
  state = {
   
  }

  render() {
    var  microserviceMapping = {
      'parameters': ['A', 'B', 'C', 'D', 'E'],
      'mappings': {
        'A': {'param': 'A', 'type': 'one-to-one', 'subType': 'type A', 'function': {'name': 'test','arguments': ['B2', 'B1', 'B3'], 'code': 'Hey there Im working'}},
        'B': {'param': 'B', 'type': 'one-to-one', 'subType': 'type B', 'function': {'name': null,'arguments': [], 'code': ''}},
        'C': {'param': 'C', 'type': 'one-to-many', 'subType': 'type C', 'function': {'name': null,'arguments': [], 'code': ''}},
        'D': {'param': 'D', 'type': 'one-to-many', 'subType': 'type D', 'function': {'name': null,'arguments': [], 'code': ''}},
        'E': {'param': 'E', 'type': null, 'subType': null, 'function': {'name': null,'arguments': [], 'code': ''}}
      }
    }

    var allMappings = {
      'types': ['one-to-one', 'one-to-many', 'batching', 'splitting', 'none'],
      'subTypes': {
        'one-to-one': ['type A', 'type B', 'type C', 'type D'],
        'one-to-many': ['type E', 'type C', 'type D', 'type A'],
        'batching': ['type F', 'type D', 'type A', 'type B'],
        'splitting': ['type G', 'type A', 'type B', 'type C'],
        'none': ['none']
      }
    }

    var microserviceB = {
      'parameters' : ['B1', 'B2', 'B3', 'B4', 'none'],
      'parameterAttributes' : {
        'B1': {'name': 'B1', 'type': 'int'},
        'B2': {'name': 'B2', 'type': 'string'},
        'B3': {'name': 'B3', 'type': 'float'},
        'B4': {'name': 'B4', 'type': 'int'},
      }
    }

    return (
        <ServiceMapping microservice = {microserviceMapping} allMappings = {allMappings} microserviceB = {microserviceB}/>
    )
  }    
}

export default App;
