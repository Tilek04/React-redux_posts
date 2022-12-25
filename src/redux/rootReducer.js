import { combineReducers } from "redux";
import { likesReducer } from "./likesReduser";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";
export const rootReducer = combineReducers({
    likesReducer,
    inputReducer ,
    commentsReducer,
    appReducer
})