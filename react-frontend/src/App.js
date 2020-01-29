import React, { Component } from 'react';
import ServiceMapping from './components/ServiceMapping'

class App extends Component {
  state = {
   
  }

  render() {
    var  MicroserviceSelected = {
      'Parameters': ['A', 'B', 'C', 'D', 'E'],
      'Mappings': {
        'A': [{'Param': 'A', 'Type': 'One to one', 'Attributes': {'Translation': ''}}],
        'B': [{'Param': 'B', 'Type': 'Coversion', 'Attributes': {'Translation': ''}}],
        'C': [{'Param': 'C', 'Type': 'Translation', 'Attributes': {'Translation': ''}}],
        'D': [{'Param': 'D', 'Type': 'Translation', 'Attributes': {'Translation': ''}}],
        'E': [{'Param': 'E', 'Type': 'Translation', 'Attributes': {'Translation': ''}}]
      }
    }
      return (
        <div>
          <ServiceMapping Microservice = {MicroserviceSelected}/>
        </div>
      );
  }
    
}

export default App;
