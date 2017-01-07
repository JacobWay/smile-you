import React, {Component} from 'react';

function Messages(props){
    const {num} = props;
    return(
        <ul class="nav nav-pills" role="tablist">
            <li role="presentation">
                <a href="#"><span class="fa fa-envelope"></span>&nbsp;消息
                    <span class="badge">{num}</span>
                </a>
            </li>
        </ul>
    );
}

export {Messages};

