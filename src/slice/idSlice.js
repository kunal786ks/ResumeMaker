import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const idPersistConfig = {
  key: 'id',
  storage,
};

const idSlice = createSlice({
  name: 'userId',
  initialState: {
    userId:null,
  },
  reducers: {
    setId: (state, action) => {
      state.userId=action.payload;
    },
  },
});

export const { setId } = idSlice.actions;

export default persistReducer(idPersistConfig, idSlice.reducer);
