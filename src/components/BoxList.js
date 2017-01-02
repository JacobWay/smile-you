import React, {Component} from "react";
import {render} from "react-dom";
import axios from "axios";
import {KTVBox} from "./KTVBox";

class BoxList extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    fetchData(){
        let dataURL = "../../data/box.json";
        let self = this;
        axios
            .get(dataURL)
            .then(function(result){
                console.log("fetch data...");
                let data = result.data;
                if(data.status !== "ok"){
                    throw data.error;
                }else{
                    self.setState({
                        data: data.data
                    });
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
        let boxData = this.state.data;
        let boxList = boxData.map( (box, i) => {
            return <KTVBox key={box.box_id} dataBox={box} />
        } )
        return(
            <div>
                {boxList}
            </div>
              );
    }
}


export {BoxList};
