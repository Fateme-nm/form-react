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

  isValid = (contact) => {
    let validyInfo = {
      valid: true
    }
    let invalid = key => {
      validyInfo.valid = false
      validyInfo.invalidItem = key
    }
    Object.entries(contact).map(([key, value]) => {
      if (value.length == 0 && !validyInfo.emptyItem) {
        invalid(key)
        validyInfo.emptyItem = true
      }
    })
    if (!validyInfo.emptyItem) {
      Object.entries(contact).map(([key, value]) => {
        switch(key) {
          case 'First Name': 
          case 'Last Name': {
            if (value.length > 50) {
              invalid(key)
            }
            break;
          }
          case 'Phone': {
            if (value.length != 11) {
              invalid(key)
            }
            break;
          }
          case 'Email': {
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
              invalid(key)
            }
            break;
          }
        }
      })
    }
    return validyInfo
  }

  handleSubmitContact = (contact) => {
    if (this.isValid(contact).valid) {
      this.setState({registeredContacts: [...this.state.registeredContacts, contact]})
    }
    else if (this.isValid(contact).emptyItem) {
      alert(`${this.isValid(contact).invalidItem} is empty!`)
    }
    else {
      alert(`${this.isValid(contact).invalidItem} is not valid!`)
    }
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
