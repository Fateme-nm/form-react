import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time : new Date,
            color: '#000'
        }
    }

    componentDidMount() {
        this.timeInterval = setInterval(() => this.setTime(), 1000)
    }

    componentDidUpdate(prevProp, prevState) {
        if(this.state.time !== prevState.time ) {
            this.changeColor()
        }
    }

    componentWillUnmount() {
        if (this.timeInterval !== null) {
            clearInterval(this.interval)
        }
    }

    setTime = () => this.setState({time: new Date})

    changeColor = () => {
        let newColor = "#" + Math.floor(Math.random()*16777215).toString(16)
        this.setState({color: newColor})
    }

    render() {
        let newStyle = {
            color: this.state.color, 
            fontSize:'1.2rem'
        }
        return (
            <div>
                <div style={newStyle}>{this.state.time.toLocaleTimeString()}</div>
            </div>
        );
    }
}

export default Clock;
