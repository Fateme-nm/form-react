import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class Contact extends Component {
    // delete = () => {

    // }
    render() {
        return (
            <tr>
                {Object.entries(this.props.itemsContact)
                    .map(value => <td key={value}>{value}</td>)}
                <td>
                    <Button className='bg-danger' onClick={this.delete}>Delete</Button>
                </td>
            </tr>
        )
    }
}

export default Contact;
