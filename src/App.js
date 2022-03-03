import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import FormContact from './components/FormContact/FormContact';
import Table from './components/Table/Table';

class App extends Component{
  constructor(prop) {
    super(prop)
    this.state = {
      registeredContacts : []
    }
  }

  handleSubmitContact = (contact) => {
    this.setState({registeredContacts: [...this.state.registeredContacts, contact]})
  }

  render() {
    return (
      <Container>
        <Row>
          <Col><FormContact onSubmitContact = {this.handleSubmitContact}/></Col>
        </Row>
        <Row>
          <Col><Table contacts = {this.state.registeredContacts}/></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
