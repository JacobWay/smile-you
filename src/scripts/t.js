import React, {Component} from "react";
import {render} from "react-dom";
import {Comment} from '../components/Comments.js';

class Test extends Component{
    render(){
        return(
            <div>
                <Comment />
            </div>
            );
    }
}

let mountNode = document.getElementById("app");
render(<Test />, mountNode);


