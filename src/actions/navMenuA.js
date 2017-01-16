// fetch SideBar data

// menu data url
const menuDataUrl = "../../data/menuData.json";
// alarms json data url
const alarmsDataUrl = "../../data/alarmsData.json"
// box list data url
const boxListDataUrl = "../../data/box.json";


const RECEIVE_ALARMS = "RECEIVE_ALARMS";
const RECEIVE_SIDEBAR = "RECEIVE_SIDEBAR";
const RECEIVE_BOXLIST = "RECEIVE_BOXLIST";

const receiveAlarmsA = (data) => {
    {
        type: RECEIVE_ALARMS,
        alarmsObj: data
    }
}

const fetchAlarmsA = () => {
    return (dispatch) => {
        
        return axios.get(alarmsDataUrl)
        .then( (res) => {
            const data = res.data;
            console.log("data in fetchAlarmsA... ", data);

            dispatch(receiveAlarmsA(data));
        } )
        .catch( (err) => {
            console.log("error in fetchAlarmsA... ", err);
        } );
    }
}

const receiveSideBarA = (data) => {
    {
        type: RECEIVE_SIDEBAR,
        menuList: data
    }
}

const fetchSideBarA = () => {
    return (dispatch) => {
        axios.get(menuDataUrl)
        .then( (res) => {
            dispatch(receiveSideBarA(res.data));
        } )
        .catch( (err) => {
            console.log("error in fetchSideBarA... ", err);
        } );
    }
}

const receiveBoxListA = (data) => {
    {
        type: RECEIVE_BOXLIST,
        menuList: data
    }
}

const fetchBoxListA = () => {
    return (dispatch) => {
        axios
            .get(boxListDataUrl)
            .then((res) => {
                let data = res.data;
                if(data.status !== "ok"){
                    throw data.error;
                }else{
                    dispatch(receiveBoxListA(data.data));
                }
            })
            .catch((err) => {
                console.log("error in fetchBoxListA... ", err);
            });
    }
}


exports {RECEIVE_ALARMS, RECEIVE_SIDEBAR, RECEIVE_BOXLIST, fetchAlarmsA, fetchSideBarA, fetchBoxListA};
