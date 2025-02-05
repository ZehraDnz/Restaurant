import { applyMiddleware, combineReducers, createStore} from "redux";
import cartReducers from "./reducers/cartReducers";
import restaurantReducers from "./reducers/restaurantReducers";
import {thunk}  from "redux-thunk";

import loginReducer from "./reducers/loginReducer";

 const rootReducer= combineReducers({
    cartReducers,
    restaurantReducers,
    loginReducer,
 });
 const store= createStore(rootReducer,applyMiddleware(thunk));
 export default store;