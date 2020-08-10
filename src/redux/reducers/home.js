import types from "../types";

const initial_state = {
    crouselData:[],
    gridData:[],
    isLoading:false,
}

export default function (state = initial_state, action) {

    switch (action.type) {
        case types.HOME_LOADING:{
            return {...state,isLoading:true}
        }
        case types.HOME_LOADING_OFF:{
            return {...state,isLoading:false}
        }
        case types.HOME_DATA: {
            const data = action.payload
            const crouselData=data.slice(0,5);
            return { gridData: data,crouselData,isLoading:false };
        }
        default: {
            return { ...state }
        }
    }
}