import React, { Component } from 'react';
import { Table, Container, Button} from 'react-bootstrap';

class TableContact extends Component {

    constructor(props) {
        super(props)
        this.titleHeaders = ['#', 'First Name', 'Last Name', 'Phone', 'Email', 'Action']
    }

    render() {
        return (
            <Container className='mt-5'>
                <h2 className='mb-4'>Contacts table</h2>
                <Table>
                    <thead>
                        <tr>
                            {this.titleHeaders.map(th => <th>{th}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map((contact, index) =>
                            <tr>
                                <th>{index + 1}</th>
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
