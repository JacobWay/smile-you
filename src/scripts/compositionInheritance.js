import React, {Component} from "react";
import {render} from "react-dom";

function FancyBox(props){
    const element = (
        <div class={"fancyBox fancyBox_" + props.color}>
            {props.children}
        </div>
    );

    return(
        element
    );
}

function WelcomeDialog(){
    const element = (
        <FancyBox color="green">
            <h1 class="dialog_title">Welcom</h1>
            <p class="dialog_message">This is your fancy box</p>
        </FancyBox>
    );

    return element;
}

function Contact(){
    return(
        <h1>Contact on the left</h1>
    );
}

function Chat(){
    return(
        <h1>Chat on the right</h1>
    );
}

function SplitPane(props){
    return(
        <div class="SplitPane">
            <div class="SplitPane_left">
                {props.left}
            </div>
            <div class="SplitPane_right">
                {props.right}
            </div>
        </div>
    );
}

function App(){
    return(
        <SplitPane 
            left={<Contact />}
            right={<Chat />}
        />
            
    );
}

class SignupDialog extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }

    changeHandler = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    submitHandler = (e) => {
        console.log("submitting... ");
    }
    

    render(){
        return(
            <div>
                <Dialog
                    title="Mars exploration program"
                    message="How should I return the message"
                >
                    <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.changeHandler}
                    />
                    <button 
                        type="submit" 
                        value="Submit"
                        onClick={this.submitHandler}
                    >
                        Sign me up
                    </button>
                </Dialog>
            </div>
        );
    }
}

// todo
function Dialog(props){
    return(
        <FancyBox color="pink">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.message}
            </p>
            {props.children}
        </FancyBox>
    );
}

const mountNode = document.getElementById("app");
render(<SignupDialog />, mountNode);
