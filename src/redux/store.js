import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './post';

export default configureStore({
  reducer: {
    users: usersReducer, 
  }
})