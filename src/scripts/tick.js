import React, {Component} from "react";
import {render} from "react-dom";

const mountNode = document.getElementById("app");

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount(){
        console.log("in componentDidMount...");
        this.timerId = setInterval( () => this.tick(), 1000 );
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick = () => {
        this.setState({date: new Date()});
    }

    render(){
        console.log("render...");
        return(
            <div>
                <h1>Tick ...</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

render(<Clock />, mountNode);

