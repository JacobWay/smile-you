import React, {Component} from "react";
import {render} from "react-dom";

class Greeting extends Component{
    constructor(props){
        super(props);
        console.log("constructor... ", this.props);
        this.firstName = this.props.user.firstName;
        this.lastName = this.props.user.lastName;
        this.user = {
            firstName: this.firstName,
            lastName: this.lastName
        }
    }


    formatData = (user) => {
        return `${user.firstName} ${user.lastName}`;
    }

    render(){
        return(
            <h1>{this.formatData(this.user)}</h1>
        );
    }
}


const mountNode = document.getElementById("app");
render(<Greeting user={{firstName: "J", lastName: "Q"}}/>, mountNode);
