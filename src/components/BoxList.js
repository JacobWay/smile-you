import React, {Component} from "react";
import {render} from "react-dom";
import axios from "axios";
import {KTVBox} from "./KTVBox";
import {fetchBoxListA} from "../actions/boxListA.js";

class BoxList extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        console.log("componentDidMount of c/BoxList.js...");
        const {dispatch} = this.props;
        dispatch(fetchBoxListA());
    }

    componentWillUnmount(){
    }

    render(){
        console.log("rendering of c/BoxList.js...");
        console.log("rendering of c/BoxList.js of props...", this.props);
        const {boxList} = this.props;
        const boxListElement = boxList.map( (box, i) => {
            return <KTVBox key={box.box_id} dataBox={box} />
        } )
        return(
            <div>
                {boxListElement}
            </div>
              );
    }
}


export {BoxList};
