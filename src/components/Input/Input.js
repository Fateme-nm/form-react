import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Input extends Component {
    render() {
        return (
            <Form.Group>
                <Form.Label>{this.props.title}</Form.Label>
                <Form.Control name = {this.props.title} value = {this.props.value} onChange={this.props.InputValue}></Form.Control>
            </Form.Group>
        );
    }
}

export default Input;
