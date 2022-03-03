import React, { Component } from 'react';
import { Form , Button, Container} from 'react-bootstrap';
import Input from '../Input/Input';

class FormContact extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            formObj : {
                'first name': '',
                'last name': '',
                'phone': '',
                'email': ''
            }
        }
    }

    inputValue = (e) => {
        this.setState({formObj: {...this.state.formObj, [e.target.name]: e.target.value}})
    }

    submit = () => {
        this.props.onSubmitContact(this.state.formObj)
        this.setState({
            formObj : {
                'first name': '',
                'last name': '',
                'phone': '',
                'email': ''
            }})
    }

    render() {
        return (
            <Container>
                <Form>
                    {Object.entries(this.state.formObj).map(([key, value]) => 
                    <Input title = {key} value= {value} 
                    InputValue = {(e) => this.inputValue(e)} key = {key}/>)}
                    <Button onClick={(e) => { e.preventDefault();this.submit()}}>
                        submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default FormContact;
