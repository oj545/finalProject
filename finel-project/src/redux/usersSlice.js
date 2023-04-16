import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/intialData";
import { isUserExist } from "../helperFunction/loginValidation";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: undefined,
    users: [...users],
    message: "",
  },
  reducers: {
    login(state, action) {
      // 1) chek if password and user currect

      const findUser = isUserExist(
        state.users,
        action.payload.userName,
        action.payload.password
      );
      // 2) set user and message
      if (!findUser) {
        state.message = "user name or password are not currect ";
      } else {
        state.currentUser = findUser;
        state.message = "You Login Successfuly";
      }
    },
  },
});
export const userActions = usersSlice.actions;
export default usersSlice;
