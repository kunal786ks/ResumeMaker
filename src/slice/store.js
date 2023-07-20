import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice';
import personalReducer from './personalSlice'
import coreReducer from './coreSlice'
import hobbieReducer from './hobbieSlice'
import idReducer from './idSlice'
import edReducer from './edSlice'
const userPersistConfig = {
  key: 'user',
  storage,
};

const detailspersistConfig={
    key:'detail',
    storage,
}

const corepersistConfig={
    key:'core',
    storage,
}

const hobbiepersistConfig={
    key:'hobbie',
    storage,
}
const idPersistConfig = {
  key: 'id',
  storage,
};


const edpersistConfig={
  key:'ed',
  storage,
}


const persistedReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
  detail: persistReducer(detailspersistConfig, personalReducer),
  core:persistReducer(corepersistConfig,coreReducer),
  hobbie:persistReducer(hobbiepersistConfig,hobbieReducer),
  id: persistReducer(idPersistConfig, idReducer),
  ed:persistReducer(edpersistConfig,edReducer),
})

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
