import React, {Component} from "react";
import {render} from "react-dom";
import axios from "axios";
require("../scss/base.scss");
require("../scss/frontDesk.scss");

class KTVBox extends Component{
    constructor(){
        super();
        this.state = {
            data: {}
        }
    }

    fetchData(){
        let dataURL = "../../data/box.json";
        let self = this;
        axios
            .get(dataURL)
            .then(function(result){
                console.log("fetch data...");
                console.log("self...", self);
                console.log("restult...", result);
                let data = result.data;
                if(data.status !== "ok"){
                    throw data.error;
                }else{
                    self.setState({
                        data: data.data[0]
                    });
                    console.log("self.state: ", self.state);
                }
            })
    }

    componentDidMount(){
        this.dataRequest = this.fetchData();
    }

    componentWillUnmount(){
        this.dataRequest.abort();
    }

    render(){
        let {box_status,
            box_name,
            box_status_cn,
            time_begin_end,
            box_type,
            box_capacity} = this.state.data;
        let imgStatus = "ca_img_" + box_status + ".png";
        let imgUrl = "../../assets/images/" + imgStatus;
        let dotStatus = "ca-" + box_status;
        return(
            <div class="ca-box">
                <div class="ca-upper">
                    <div class="ca-status-img">
                        <img src={imgUrl} />
                    </div>
                    <h3>{box_name}</h3>
                </div>

                <div class="ca-down">
                    <ul class="ca-box-ul">
                        <li><img src="../../assets/images/box.png"/><span>{box_type}</span><span>({box_capacity}人)</span></li>
                        <li><img src="../../assets/images/clock.png"/><span>{time_begin_end}</span></li>
                        <li><span class="ca-out-dot"><span class="ca-dot ca-busy"></span></span><span>{box_status_cn}</span></li>
                    </ul>
                </div>
            </div>
              );
    }
}

let mountNode = document.getElementById("ktvBox");
render(<KTVBox />, mountNode);

