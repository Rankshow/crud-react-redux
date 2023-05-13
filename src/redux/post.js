import { createSlice } from '@reduxjs/toolkit';
import { UserData } from './FakeData';

// the store which store every action and state of the the code base
export const userSlice = createSlice({
 name: "user",
 initialState: { value: UserData},
 reducers: {
  // this add users to the list
   commentPost: (state, action) => {
    state.value.push(action.payload)
   },
  //  this delete users from the list
   deletePost: (state, action) => {
    state.value = state.value.filter((user) => user.id !== action.payload.id)
   },
  //  this update the username of the user
   updateUser: (state, action) => {
     state.value.map((user) => {
      if(user.id === action.payload.id){
        user.username = action.payload.username;
      }
     })
   }
 }
})

export const { commentPost, deletePost, updateUser } = userSlice.actions;
export default userSlice.reducer;






















// export const userSlice = createSlice({
//   name: 'users',
//   initialState: { value: UserData },
//   reducers: {
//       addUser: (state, action) =>  {
//         //  adding a user
//         state.value.push(action.payload);
//      },
//      deleteUser: (state, action) => {
//       state.value = state.value.filter((user) => user.id !== action.payload.id);
//      },
//       //  updating user
//      updateUserName: (state, action) => {

//       state.value.map((user) => {
//         if(user.id === action.payload.id) {
//           user.username = action.payload.username;
//         }
//       })
//      }
//   },
// })

// export const {addUser, deleteUser, updateUserName} = userSlice.actions;
// export default userSlice.reducer;