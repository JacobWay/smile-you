import React, {Component} from "react";
import {render} from "react-dom";
require("../scss/base.scss");
require("../scss/frontDesk.scss");

class KTVBox extends Component{
    render(){
        return(
                <div class="ca-box">
                    <div class="ca-upper">
                        <div class="ca-status-img">
                            <img src="../../assets/images/ca_img_1.png"/>
                        </div>
                        <h3>A112</h3>
                    </div>

                    <div class="ca-down">
                        <ul class="ca-box-ul">
                            <li><img src="../../assets/images/box.png"/><span>中包</span><span>(8人)</span></li>
                            <li><img src="../../assets/images/clock.png"/><span>07-23 14:00-16:30</span></li>
                            <li><span class="ca-out-dot"><span class="ca-dot ca-idle"></span></span><span>空闲</span></li>
                        </ul>
                    </div>
                </div>
              );
    }
}

let mountNode = document.getElementById("ktvBox");
render(<KTVBox />, mountNode);

