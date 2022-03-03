import React, { Component } from 'react';
import Input from '../Input/Input';
import Table from '../Table/Table';

class Form extends Component {
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
        this.setState({registeredContacts: 
            [...this.state.registeredContacts, this.state.formObj]})
    }

    render() {
        return (
            <div>
                <form>
                    {Object.keys(this.state.formObj).map(key => 
                    <Input title = {key} InputValue = {(e) => this.inputValue(e)} 
                    key = {key}/>)}
                    <div onClick={(e)=> { e.preventDefault()
                        this.submit()}}>
                        submit
                    </div>
                </form>
                <Table formHeader = {this.state.formObj} contacts = {this.state.registeredContacts}/>
            </div>
        );
    }
}

export default Form;
