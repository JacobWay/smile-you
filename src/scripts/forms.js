import React, {Component} from "react";
import {render} from "react-dom";

const element = (
    <form>
        <label>
            name:
            <input type="text" />
        </label>
        <input type="submit" value="Go"/>
    </form>
);

class NameForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }

    changeHandler = (e) => {
        console.log("changing input value...");
        this.setState({
            value: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log("submitting...");
    }

    componentDidMount(){
        console.log("componentDidMount...");
        //const input_ = document.getElementById("inputName");
        const input_ = document.querySelector("input");
        console.log(input_);
        input_.focus();
        //input_.value = "This is your name";
        var activeElement = document.activeElement;
        console.log("active element... ", activeElement);
    }

    render(){
        console.log("rendering...");
        return(
            <form onSubmit={this.submitHandler}>
                <label>
                    name:
                    <input 
                        id="inputName"
                        type="text" 
                        value={this.state.value}
                        onChange={this.changeHandler}
                        ref={(input) => this.inputNode=input}
                    />
                </label>
                <input type="submit" value="Go"/>
            </form>
        );
    }
}

const textarea = (
    <textarea>
        There is some text in the textarea.
    </textarea>
);

class EssayForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };
    }

    changeHandler = (e) => {
        console.log("changing textarea value...");
        this.setState({
            value: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log("submitting...");
    }

    componentDidMount(){
        console.log("componentDidMount...");
        const textarea_ = document.querySelector("textarea");
        console.log(textarea_);
        textarea_.focus();
        var activeElement = document.activeElement;
        console.log("active element... ", activeElement);
    }

    render(){
        console.log("rendering...");
        return(
            <form onSubmit={this.submitHandler}>
                <label>
                    name:
                    <textarea 
                        id="essayTextarea"
                        value={this.state.value}
                        onChange={this.changeHandler}
                    />
                </label>
                <input type="submit" value="Go"/>
            </form>
        );
    }
}

const select_ = (
    <select>
        <option value='grapefruit'>Grapefruit</option>
        <option value='lime'>Lime</option>
        <option value='apple' selected>Apple</option>
        <option value='mango'>Mango</option>
    </select>
)

class FlavorForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'mango'
        };
    }

    changeHandler = (e) => {
        console.log("changing select value...");
        this.setState({
            value: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log("submitting...");
        const form_ = document.querySelector("form");
        const select_ = form_.elements["select"];
        const formValue = select_.value;
        console.log(form_);
        console.log(form_.elements);
        console.log("your submitting... ", formValue);
    }

    componentDidMount(){
    }

    render(){
        console.log("rendering...");
        console.log("this.state... ", this.state);
        return(
            <form onSubmit={this.submitHandler}>
                <label>
                    Your favorite fruit:
                    <select value={this.state.value} name="select" onChange={this.changeHandler}>
                        <option value='grapefruit'>Grapefruit</option>
                        <option value='lime' selected>Lime</option>
                        <option value='apple'>Apple</option>
                        <option value='mango'>Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

var mountNode = document.getElementById("app");
render(<FlavorForm />, mountNode);
