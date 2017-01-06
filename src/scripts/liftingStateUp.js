import React, {Component} from "react";
import {render} from "react-dom";

function BoilingVerdict(props){
    let {celsius} = props;
    celsius = parseFloat(celsius);
    if(celsius > 100){
        return <p>The water would boil.</p>
    }
    if(celsius <= 100){
        return <p>The water would not boil.</p>
    }else{
        return null;
    }
}

class TemperatureInput extends Component{
    constructor(props){
        super(props);
    }

    changeHandler = (e) => {
        const {onChange} = this.props;
        onChange(e);
    }

    render(){
        const {scale, value} = this.props;
        console.log("this.props in TemperatureInput... ", this.props);
        return(
            <fieldset>
                <legend>What temperature of {name} unit will boil the water:</legend>
                <input 
                    type="text" 
                    value={value} 
                    onChange={this.changeHandler}
                />
            </fieldset>
        );
    }
}

function toCelsius(value){
    let result =  (value - 32) * 5 / 9;
    return result;
}

function toFahrenheit(value){
    let result = (value * 9 / 5) + 32;
    return result;
}

function tryConvert(value, convert){
    value = parseFloat(value);
    if(Number.isNaN(value)) return '';

    const output = convert(value);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded;
}

class BoilingDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            scale: 'c'
        }
    }

    handleCelsiusChange = (e) => {
        const value = e.target.value;
        this.setState({
            value: value,
            scale: 'c'
        });
    }

    handleFahrenheitChange = (e) => {
        const value = e.target.value;
        this.setState({
            value: value,
            scale: 'f'
        });
    }

    render(){
        const {value, scale} = this.state;
        const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
        const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;
        return(
            <div>
                <TemperatureInput 
                    scale={"c"}
                    value={celsius} 
                    onChange={this.handleCelsiusChange}
                />
                <TemperatureInput 
                    scale={"f"}
                    value={fahrenheit} 
                    onChange={this.handleFahrenheitChange}
                />
                <hr />
                <BoilingVerdict celsius={celsius} />
            </div>
        );
    }
}


var mountNode = document.getElementById("app");
render(<BoilingDisplay />, mountNode);
