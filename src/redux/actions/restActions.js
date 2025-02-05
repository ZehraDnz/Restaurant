import api from "../../api";
import ActionTypes from "../actionTypes";


// Aksiyon (Nesne)oluşturan fonksiyonlar bunlar senkrondur
export const setRestaurant=(payload)=>{type: ActionTypes.REST_SUCCESS,payload}

//Asenkron thunk fonksiyonu senkronlardan farklı olarak api isteği atıp ardından 
//dispatch ile reducera haber gönderibiliriz.
export const getRestaurants=()=>{
    return async (dispatch)=>{
        //Reducer a haber göndderdik
        dispatch({type:ActionTypes.REST_LOADING});
        // api isteği at
        api.get("/restaurants")
        .then((res)=>{dispatch({type:ActionTypes.REST_SUCCESS, payload:res.data})})
        .catch((err)=>{dispatch({type:ActionTypes.REST_ERROR,payload:err})})
    };
};