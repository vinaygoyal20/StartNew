import store from '../store';
import {apiGet} from '../../utils/utils';
import types from '../types';
import {HOME_DATA_API} from '../../config/urls';
const {dispatch} = store;

const saveHomeData = (data) => {
    dispatch({
      type: types.HOME_DATA,
      payload: data,
    });
  };

export const getHomeData=(query="&count=20")=>{
    dispatch({type:types.HOME_LOADING})
    return new Promise((resolve,reject)=>{
        apiGet(HOME_DATA_API+query).then(res=>{
            console.log(res);
            saveHomeData(res);
            resolve(res)
        }).catch(error=>{
            dispatch({type:types.HOME_LOADING_OFF})
            reject(error)
        })
    })
}