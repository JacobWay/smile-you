import React, {Component} from 'react';
import _ from "lodash";

function UserOperation(props){
    const {name} = props;

    return(
        <div class="dropdown">
            <button type="button" class="btn btn-default dropdown-toggle" id={_.uniqueId("user_dropdownMenu")}
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span class="fa fa-user"></span>
                  &nbsp;用户{name}
                  <span class="caret"></span>
              </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                <li><a href="#">收银交接班</a></li>
                <li><a href="#">修改密码</a></li>
                <li><a href="#">退出</a></li>
            </ul>
        </div>
    );
}

export {UserOperation};


