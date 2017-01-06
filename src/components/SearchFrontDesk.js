import React, {Component} from 'react';

const areaFilterData = {
    name: "区域",
    name_en: "area",
    data: [
        {
            serial: 0, value: "一楼"
        },
        {
            serial: 1, value: "二楼"
        },
        {
            serial: 2, value: "三楼"
        },
    ]
};

const styleFilterData = {
    name: "类型",
    name_en: "style",
    data: [
        {
            serial: 0, value: "大包"
        },
        {
            serial: 1, value: "中包"
        },
        {
            serial: 2, value: "小包"
        },
    ]
};

const statusFilterData = {
    name: "状态",
    name_en: "status",
    data: [
        {
            serial: 0, value: "空闲"
        },
        {
            serial: 1, value: "使用"
        },
        {
            serial: 2, value: "买钟"
        },
        {
            serial: 3, value: "结账"
        },
        {
            serial: 4, value: "清洁"
        },
        {
            serial: 5, value: "已预订"
        },
        {
            serial: 6, value: "锁定"
        },
        {
            serial: 7, value: "故障"
        },
        {
            serial: 8, value: "测机"
        },
        {
            serial: 9, value: "提醒"
        },
    ]
};

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            presetValue: '-1',
            areaValue: '-1',
            styleValue: '-1',
            statusValue: '-1',
        }
    }

    changeHandlerArea = (e) => {
        this.setState({
            areaValue: e.target.value
        })
    }

    changeHandlerStyle = (e) => {
        this.setState({
            styleValue: e.target.value
        })
    }

    changeHandlerStatus = (e) => {
        this.setState({
            statusValue: e.target.value
        })
    }

    componentsDidMount = () => {
    }


    render(){
        console.log("rendering in SearchBar...");
        const {presetValue, value} = this.state;
        return(
            <div class="ca-search">
                <ul>
                    <FilterList
                        presetValue={presetValue}
                        value={value}
                        filterData={areaFilterData}
                        onChange={this.changeHandlerArea}
                    />
                    <FilterList
                        presetValue={presetValue}
                        value={value}
                        filterData={styleFilterData}
                        onChange={this.changeHandlerStyle}
                    />
                    <FilterList
                        presetValue={presetValue}
                        value={value}
                        filterData={statusFilterData}
                        onChange={this.changeHandlerStatus}
                    />
                </ul>
            </div>
        );
    }
}

function FilterList(props){
    const {presetValue, value, filterData, onChange} = props;
    const {name, data} = filterData;
    return(
        <li>
            <label>{name}筛选：
                <Select_ 
                    presetValue={presetValue}
                    value={value}
                    name={name}
                    data={data} 
                    onChange={onChange}/>
            </label>
        </li>
    );
}

function Select_(props){
    const {presetValue, value, name, data, onChange} = props;

    return(
        <select value={value} onChange={onChange}>
            <option value={presetValue}>请选择{name}</option>
            {
                data.map( (item, i) => {
                return <option value={item.serial} key={item.serial}>{item.value}</option>
                })
            }
        </select>
    );
}

export {SearchBar};
