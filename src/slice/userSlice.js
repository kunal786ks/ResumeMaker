import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const userPersistConfig = {
    key: 'user',
    storage,
  }; 

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [], // Array to store multiple users
  },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload); // Add the new user to the array
    },
  },
});

export const { registerUser } = userSlice.actions;
export default persistReducer(userPersistConfig,userSlice.reducer);
