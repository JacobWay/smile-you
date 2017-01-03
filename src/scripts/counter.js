import React, {Component} from "react";
import {render} from "react-dom";

const counter = (state={value: 0}, action) => {
    switch (action.type){
        case "increment":
            return {value: state.value + 1};
        case "decrement":
            return {value: state.value - 1};
        default:
            return state;
    }
}

class Counter extends Component{
    state = counter(undefined, {});

    dispatch = (action) => {
        this.setState( (prevState) => {
            return counter(prevState, action)
        } );
    }

    increment =  () => {
        this.dispatch({type: "increment"});
    };

    decrement = ( () => {
        this.setState( (prevState) => ({
            value: prevState.value - 1
        }) )
    });

    autoChange = () => {
        if(this.timer){
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(this.increment, 1000);
    }

    componentDidUpdate = () => {
        this.autoChange();
    }

    render(){
        return(
            <div>
                <h1>Counter: {this.state.value}</h1>

                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
              );
    }
}

var mountNode = document.getElementById("app");
render(<Counter />, mountNode);
