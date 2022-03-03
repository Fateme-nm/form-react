import React, { Component } from 'react';
import FormContact from './components/FormContact/FormContact';
import TableContact from './components/TableContact/TableContact';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

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
      <Container className='mt-5'>
        <Row>
          <Col><FormContact onSubmitContact = {this.handleSubmitContact}/></Col>
        </Row>
        <Row>
          <Col><TableContact contacts = {this.state.registeredContacts}/></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
