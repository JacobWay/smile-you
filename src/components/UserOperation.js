import React, {Component} from 'react';
import _ from "lodash";

function UserOperation(props){
    const {name} = props;
    const id = _.uniqueId("user_dropdownMenu");

    return(
        <span class="dropdown">
            <a href="#" role="button" class="dropdown-toggle" id={id}
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
            >
                  <span class="fa fa-user"></span>
                  &nbsp;用户{name}
                  <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" aria-labelledby={id}>
                <li><a href="#">收银交接班</a></li>
                <li><a href="#">修改密码</a></li>
                <li><a href="#">退出</a></li>
            </ul>
        </span>
    );
}

export {UserOperation};


