import React, { Component } from 'react';
import Contact from '../Contact/Contact';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {Object.keys(this.props.formHeader).map(key => <th>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.props.contacts.map(contact => <Contact itemsContact= {contact}/>)}
                </tbody>
            </table>
        );
    }
}

export default Table;
