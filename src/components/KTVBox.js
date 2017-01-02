import React, {Component} from "react";
import {render} from "react-dom";

class KTVBox extends Component{
    render(){
        let {box_status,
            box_name,
            box_status_cn,
            time_begin_end,
            box_type,
            box_capacity} = this.props["dataBox"];
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
                        <li><span class="ca-out-dot"><span class={"ca-dot " + dotStatus}></span></span><span>{box_status_cn}</span></li>
                    </ul>
                </div>
            </div>
              );
    }
}

export {KTVBox};

