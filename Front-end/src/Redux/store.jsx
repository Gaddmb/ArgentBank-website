import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/root.reducer.jsx";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
