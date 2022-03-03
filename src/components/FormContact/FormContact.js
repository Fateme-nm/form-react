import React, { Component } from 'react';
import { Form , Button, Container} from 'react-bootstrap';
import Input from '../Input/Input';

class FormContact extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            formObj : {
                'First Name': '',
                'Last Name': '',
                'Phone': '',
                'Email': ''
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
                'First Name': '',
                'Last Name': '',
                'Phone': '',
                'Email': ''
            }})
    }

    render() {
        return (
            <Container className='mb-5 w-50'>
                <h2 className='mb-4'>Contact registration form</h2>
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
