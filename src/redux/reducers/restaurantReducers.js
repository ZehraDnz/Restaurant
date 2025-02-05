import ActionTypes from "../actionTypes";

const initialState={
    restaurants:[],
    isLoadig:true,
    error:null,
}
const restaurantReducers= (state=initialState, action)=>{
   
    switch(action.type){
        case ActionTypes.REST_LOADING:
        return {...state, isLoading:true};
        case ActionTypes.REST_SUCCESS:
        return {...state, isLoading:false, error:null, restaurants:action.payload};
        case ActionTypes.REST_ERROR:
            return {...state, isLoading:false,error:action.payload.message};
            default:
                return state;
    }

}
export default restaurantReducers
