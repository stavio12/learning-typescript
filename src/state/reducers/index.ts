import { combineReducers } from "redux";
import ReducerRepo from "./ReducerRepo";

const reducers = combineReducers({
  repos: ReducerRepo,
});

export default reducers;
// in here all the reducers are being combined into repos

// this root state will take the reducer function and rerturn the type of whatever is there
export type RootState = ReturnType<typeof reducers>;

//liks to reducer repo file
