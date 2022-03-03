import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return Object.values(this.props.itemsContact).map(value => <td>{value}</td>)
    }
}

export default Contact;
