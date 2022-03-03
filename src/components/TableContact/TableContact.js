import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import { Table, Container} from 'react-bootstrap';

class TableContact extends Component {
    render() {
        return (
            <Container className='mt-5'>
                <h2 className='mb-4'>Contacts table</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map(contact =>
                            <Contact itemsContact= {contact}/>)}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default TableContact;
