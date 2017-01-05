import React, {Component} from "react";
import {render} from "react-dom";

const mountNode = document.getElementById("app");

class ActionLink extends Component{
    render(){
        return(
            <a href="#" onClick={this.clickHandler}>Click me</a>
        );
    }

    clickHandler = (e) => {
        e.preventDefault();
        console.log('This is a log from click event');
    }
}

class ToggleButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            statusOn: false
        }
    }

    clickHandler = (e) => {
        console.log("clicking...");
        e.preventDefault();
        this.setState((prevState) => {
            console.log(prevState);
            let statusOn = prevState.statusOn ? false : true;
            console.log(statusOn);
            return {statusOn: !prevState.statusOn};
        });
    }

    componentWillUpdate = () => {
        console.log("state in componentWillUpdate...", this.state);
    }

    componentDidUpdate = () => {
        console.log("state in componentDidUpdate...", this.state);
    }

    render(){
        console.log("render...");
        return(
            <button onClick={this.clickHandler}>{this.state.statusOn ? "OFF" : "ON"}</button>
        );
    }

}

render(<ToggleButton />, mountNode);
