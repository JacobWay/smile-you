import axios from "axios";

// box list data url
const boxListDataUrl = "../../data/box.json";

const RECEIVE_BOXLIST = "RECEIVE_BOXLIST";

const receiveBoxListA = (data) => {
    return {
        type: RECEIVE_BOXLIST,
        boxList: data
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


export {RECEIVE_BOXLIST, fetchBoxListA};

