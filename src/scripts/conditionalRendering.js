import React, {Component} from "react";
import {render} from "react-dom";

class GreetingControl extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: true,
            isWarning: true,
            warningMessage: "There is a warning",
        };
    }

    handlerLogin = (e) => {
        this.setState( (prevState) => {
            return {isLogin: true}
        } )
    }

    handlerLogout = (e) => {
        this.setState( (prevState) => {
            return {isLogin: false}
        } )
    }

    handlerToggleWarning = (e) => {
        this.setState((prevState) => {
            return ({isWarning: !prevState.isWarning});
        })
    }

    componentWillUpdate = () => {
        console.log("isWarning in componentWillUpdate... ", this.state.isWarning);
    }

    componentDidUpdate = () => {
        console.log("isWarning in componentDidUpdate... ", this.state.isWarning);
    }

    render(){
        console.log("rendering...");
        let button = null;
        const {isLogin} = this.state;
        return(
            <div>
                <Warning 
                    warningMessage={this.state.warningMessage}
                    isWarning={this.state.isWarning}
                    onClick={this.handlerToggleWarning}
                />
                <Greeting isLogin={this.state.isLogin} />
                {
                    isLogin 
                        ? 
                    (<ButtonLogout  onClick={this.handlerLogout} />)
                        : 
                    (<ButtonLogin  onClick={this.handlerLogin} />)
                } 
            </div>
        );
    }
}

function Warning(props){
    return(
        <div>
            {
                props.isWarning 
                    ?
                    (
                        <div>
                            <span>{props.warningMessage}</span>
                            <button onClick={props.onClick}>Hide Warning</button>
                        </div>
                    )
                    :
                (<button onClick={props.onClick}>Show Warning</button>)
            }
        </div>
    );
}

function Greeting(props){
    const isLogin = props.isLogin;
    console.log("isLogin... ", isLogin);
    if(isLogin) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}

function UserGreeting(){
    return (<p>Welcome back!</p>);
}

function GuestGreeting(){
    return (<p>Welcome guest!</p>);
}

function ButtonLogin(props){
    return(
        <button onClick={props.onClick}>Login</button>
    );
}

function ButtonLogout(props){
    return(
        <button onClick={props.onClick}>Logout</button>
    );
}


const mountNode = document.getElementById("app");
render(<GreetingControl />, mountNode);
