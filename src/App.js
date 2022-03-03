import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import FormContact from './components/FormContact/FormContact';

class App extends Component{
  constructor(prop) {
    super(prop)
    this.state = {
      registeredContacts : []
    }
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col><FormContact /></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
