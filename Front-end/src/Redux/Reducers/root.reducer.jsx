import { combineReducers } from "redux"; // combineReducers pour combiner tous les reducers
import userReducer from "./user.reducer";

export default combineReducers({
  user: userReducer,
});
