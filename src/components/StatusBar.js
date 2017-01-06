import React, {Component} from "react";

const items = [
    {
        status_en: "idle",
        status_cn: "空闲",
        status_num: 0
    },
    {
        status_en: "busy",
        status_cn: "使用",
        status_num: 1
    },
    {
        status_en: "prepaid_session",
        status_cn: "买钟",
        status_num: 2
    },
    {
        status_en: "check_out",
        status_cn: "结账",
        status_num: 3
    },
    {
        status_en: "clean",
        status_cn: "清洁",
        status_num: 4
    },
    {
        status_en: "book",
        status_cn: "已预订",
        status_num: 5
    },
    {
        status_en: "lock",
        status_cn: "锁定",
        status_num: 6
    },
    {
        status_en: "dysfunction",
        status_cn: "故障",
        status_num: 7
    },
    {
        status_en: "test",
        status_cn: "测机",
        status_num: 8
    },
    {
        status_en: "alarm",
        status_cn: "提醒",
        status_num: 9
    },
];

function StatusItem(props){
    const {status_en, status_cn} = props;
    return(
        <li>
            <span class="ca-out-dot">
                <span class={"ca-dot ca-" + status_en}></span>
            </span>
            <span>{status_cn}</span>
        </li>
    );
}

function StatusBar(props){
    
    const element = items.map( (item, i) => {
        return(
            <StatusItem 
                status_en={item.status_en}
                status_cn={item.status_cn}
                key={item.status_num}
            />
        );
    } );


    return(
        <div class="ca-status-demo-bar">
            <ul>
                {element}
            </ul>
        </div>
    );
}

export {StatusBar}
