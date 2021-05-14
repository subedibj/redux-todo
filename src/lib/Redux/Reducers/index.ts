import { combineReducers } from "redux";
import todoReducers from "./todoReducer"

const rootReducer = combineReducers({
     todo:todoReducers
  });
  
export default rootReducer;