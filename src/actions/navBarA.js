import axios from "axios";
import fetch from "isomorphic-fetch";

const localHost = "http://localhost:9999";
const uri = "/data/alarmsData.json"
let debug = false;
// local json data
let alarmsDataUrl = "../../data/alarmsData.json";
alarmsDataUrl = debug ? (localHost + uri) : alarmsDataUrl;

const GET_ALARMS = "GET_ALARMS";
const RECEIVE_ALARMS = "RECEIVE_ALARMS";

// create an action
const receiveAlarmsA = (data) => {
    return {
        type: RECEIVE_ALARMS,
        alarmsObj: data
    }
}

const fetchAlarmsA = () => {
    return (dispatch) => {
        
        return axios.get(alarmsDataUrl)
        .then( (res) => {
            const data = res.data;
            console.log("data in axios... ", data);

            return dispatch(receiveAlarmsA(data));
        } )
        //.catch( (err) => {
            //console.log("error in fetchAlarmsA... ", err);
        //} );
    }
};

export {GET_ALARMS, RECEIVE_ALARMS, fetchAlarmsA, receiveAlarmsA};
