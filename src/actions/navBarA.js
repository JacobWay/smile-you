import axios from "axios";

// local json data
const alarmsDataUrl = "../../data/alarmsData.json"

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
        .catch( (err) => {
            console.log("error in getAlarmsData... ", err);
        } );
    }
};

export {GET_ALARMS, RECEIVE_ALARMS, fetchAlarmsA};
