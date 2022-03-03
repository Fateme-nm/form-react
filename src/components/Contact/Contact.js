import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <tr>
                {Object.values(this.props.itemsContact).map(value => <td>{value}</td>)}
            </tr>
        );
    }
}

export default Contact;
