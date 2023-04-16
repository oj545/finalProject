import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./dataSlice";
import usersSlice from "./usersSlice";
const rootReducer = configureStore({
  reducer: {
    root: rootSlice.reducer,
    users: usersSlice.reducer,
  },
});

export default rootReducer;
