// fetch SideBar data

// menu data url
const menuDataUrl = "../../data/menuData.json";

const RECEIVE_SIDEBAR = "RECEIVE_SIDEBAR";

const receiveSideBarA = (data) => {
    return {
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

export {RECEIVE_SIDEBAR, fetchSideBarA};

