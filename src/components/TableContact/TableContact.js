import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import { Table, Container, Button} from 'react-bootstrap';

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
                            <th>Action</th>
                        </tr>
                    </thead>
                        {/* {this.props.contacts.map(contact => {
                            <Contact itemsContact = {contact}/>
                        })} */}
                    <tbody>
                        {this.props.contacts.map(contact =>
                            <tr>
                                {Object.values(contact).map(value => 
                                    <td key={value}>{value}</td>)}
                                <td><Button className='bg-danger' 
                                    onClick={() => {this.props.onDeleteContact(contact)}}>Delete</Button></td>
                            </tr>)}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default TableContact;
