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

  // isValid = (contact) => {
  //   let valid = true
  //   Object.entries(contact).map(([key, value]) => {
  //     switch(key) {

  //     }
  //   })
  // }

  handleSubmitContact = (contact) => {
    // if(this.isValid(contact)) {
    //   this.setState({registeredContacts: [...this.state.registeredContacts, contact]})
    // }
    this.setState({registeredContacts: [...this.state.registeredContacts, contact]})
  }

  handleDeleteContact = (contact) => {
    this.setState({registeredContacts: this.state.registeredContacts.filter(item => {
      return item !== contact
    })})
  }

  render() {
    return (
      <Container className='mt-5'>
        <Row>
          <Col><FormContact onSubmitContact = {this.handleSubmitContact}/></Col>
        </Row>
        <Row>
          <Col><TableContact contacts = {this.state.registeredContacts} 
                  onDeleteContact = {this.handleDeleteContact}/></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
