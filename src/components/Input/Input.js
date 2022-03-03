import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <label>{this.props.title}</label>
                <input name = {this.props.title} value = {this.props.value} onChange={this.props.InputValue}></input>
            </div>
        );
    }
}

export default Input;
