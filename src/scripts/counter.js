import React, {Component} from "react";
import {render} from "react-dom";

class Counter extends Component{
    state = {value: 0};

    increment =  () => {
        this.setState( (prevState) => ({
            value: prevState.value + 1
        }) )
    };

    decrement = ( () => {
        this.setState( (prevState) => ({
            value: prevState.value - 1
        }) )
    });

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
