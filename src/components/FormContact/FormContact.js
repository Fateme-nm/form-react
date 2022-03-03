import React, { Component } from 'react';
import Input from '../Input/Input';
import Table from '../Table/Table';

class FormContact extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            formObj : {
                'first name': '',
                'last name': '',
                'phone': '',
                'email': ''
            },
            registeredContacts : []
        }
    }

    inputValue = (e) => {
        this.setState({formObj: {...this.state.formObj, [e.target.name]: e.target.value}})
    }

    submit = () => {
        this.setState({
            registeredContacts: 
            [...this.state.registeredContacts, this.state.formObj],
            formObj : {
                'first name': '',
                'last name': '',
                'phone': '',
                'email': ''
            }})
    }

    render() {
        return (
            <div>
                <form>
                    {Object.entries(this.state.formObj).map(([key, value]) => 
                    <Input title = {key} value= {value} 
                    InputValue = {(e) => this.inputValue(e)} key = {key}/>)}
                    <button onClick={(e) => { e.preventDefault();this.submit()}}>
                        submit
                    </button>
                </form>
                <Table formHeader = {this.state.formObj} 
                contacts = {this.state.registeredContacts}/>
            </div>
        );
    }
}

export default FormContact;
