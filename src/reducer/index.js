import {changeAdult} from "./reducer";
import { reducerDate } from "./reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    changeAdult,reducerDate
})

export default rootReducers;