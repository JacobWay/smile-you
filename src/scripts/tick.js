import React, {Component} from "react";
import {render} from "react-dom";

const mountNode = document.getElementById("app");
class FormatDate extends React.Component{
    render(){
        return(
            <h2> It is {this.props.date.toLocaleTimeString()}.</h2> 
        );
    }
}

class Clock extends React.Component {
    constructor(props) {
        console.log("constructor...");
        super(props);
        this.state = {
            date: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState( () => 
            ( {date: new Date()} ) 
        );
    }

    componentDidMount() {
        console.log("componentDidMount... ");
        this.timerId = setInterval(
            () => this.tick(), 
            1000
        );
    }


    componentWillUnmount() {
        //clearInterval(this.timerId);
    }

    render() {
        console.log("render... ");
        return ( 
            <div>
                <h1 > Hello, React Element </h1> 
                <FormatDate date={this.state.date} />
            </div>
        );
    }

}

class App extends Component{
    render(){
        return(
            <div>
                <Clock />
                <Clock />
                <Clock />
            </div>
        );
    }
}

render(<App />, mountNode);
