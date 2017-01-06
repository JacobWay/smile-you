import React, {Component} from 'react';
import axios from 'axios';

// area, style, status json api url
const areaFilterDataUrl = "../../data/areaFilterData.json";
const styleFilterDataUrl = "../../data/styleFilterData.json";
const statusFilterDataUrl = "../../data/statusFilterData.json";


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            presetValue: '-1',
            areaValue: '-1',
            styleValue: '-1',
            statusValue: '-1',
            areaFilterData: {
                name: '',
                data: []
            },
            styleFilterData: {
                name: '',
                data: []
            },
            statusFilterData: {
                name: '',
                data: []
            }
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

    getAreaFilterData = () => {
        axios.get(areaFilterDataUrl)
            .then((res) => {
                console.log("fetach areaFilterData...", res);
                this.setState({
                    areaFilterData: res.data
                });
            })
            .catch(function(err){
                console.log("error in fetching getAreaFilterData... ", err);
            });
    }

    getStyleFilterData = () => {
        axios.get(styleFilterDataUrl)
            .then((res) => {
                console.log("fetach styleFilterData...", res);
                this.setState({
                    styleFilterData: res.data
                });
            })
            .catch(function(err){
                console.log("error in fetching getStyleFilterData... ", err);
            });
    }

    getStatusFilterData = () => {
        axios.get(statusFilterDataUrl)
            .then((res) => {
                console.log("fetach statusFilterData...", res);
                this.setState({
                    statusFilterData: res.data
                });
            })
            .catch(function(err){
                console.log("error in fetching getStatusFilterData... ", err);
            });
    }


    componentDidMount = () => {
        this.getAreaFilterData();
        this.getStyleFilterData();
        this.getStatusFilterData();
    }


    render(){
        console.log("rendering in SearchBar...");
        const {
            presetValue, 
            value, 
            areaFilterData,
            styleFilterData,
            statusFilterData
        } = this.state;
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
