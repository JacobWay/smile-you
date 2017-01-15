import axios from "axios";

// local json data
const alarmsDataUrl = "../../data/alarmsData.json"

const GET_ALARMS = "GET_ALARMS";
const RECEIVE_ALARMS = "RECEIVE_ALARMS";

// create an action
const receiveAlarmsA = (data) => {
    return {
        type: RECEIVE_ALARMS,
        data: data
    }
}

const fetchAlarmsA = () => {
    return (dispatch) => {
        let error = "Error in fetching data.";
        
        return axios.get(alarmsDataUrl)
        .then( (res) => {
            const data = res.data;
            console.log("data in axios... ", data);

            dispatch(receiveAlarmsA(data));
        } )
        .catch( (err) => {
            console.log("error in getAlarmsData... ", err);
        } );
    }
};

export {GET_ALARMS, RECEIVE_ALARMS, fetchAlarmsA};
