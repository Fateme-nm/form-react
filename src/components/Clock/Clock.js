import React, { useState, useEffect } from 'react';

function Clock () {
    // constounctor (props) {
    //     super(props)
    //     this.state = {
    //         time: new Date,
    //         color: '#000'
    //     }
    // }
    
    // componentDidMount() {
    //     this.timeInterval = setInterval(() => this.setTime(), 1000)
    // }

    // componentDidUpdate(prevProp, prevState) {
    //     if(this.state.time !== prevState.time ) {
    //         this.changeColor()
    //     }
    // }

    // componentWillUnmount() {
    //     if (this.timeInterval !== null) {
    //         clearInterval(this.interval)
    //     }
    // }

    let [time, timeState] = useState(new Date)
    let [color, colorState] = useState('#000')
    let timeInterval = null

    useEffect (() => {
        timeInterval = setInterval(() => timeState(new Date), 1000)
        return () => {
            if (timeInterval) {
                clearInterval(timeInterval)
            }
        }
    }, [])

    useEffect (() => {
        changeColor()
    }, [time])

    function changeColor () {
        let newColor = "#" + Math.floor(Math.random()*16777215).toString(16)
        colorState(newColor)
    }

    let newStyle = {
        color: color, 
        fontSize:'1.2rem'
    }

    return (
        <div>
            <div style={newStyle}>{time.toLocaleTimeString()}</div>
        </div>
    );
}

export default Clock;
