import React, {Component} from "react";
import {render} from "react-dom";

class Test extends Component{
    render(){
        return(
            <div>
                <h1>Test</h1>
            </div>
            );
    }
}

let mountNode = document.getElementById("app");
render(<Test />, mountNode);


