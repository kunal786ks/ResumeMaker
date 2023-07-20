import {createSlice} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const hobbiepersistConfig={
    key:'hobbie',
    storage,
}

const hobbieSlice=createSlice({
    name:'hobbie',
    initialState:{
        hobbies:[] //an array to store hobbies of different user
    },
    reducers:{
        addHobbies:(state,action)=>{
            state.hobbies.push(action.payload);
        },
        updateHobbies:(state,action)=>{
            const {id,writing,reading,indoor,outdoor,yourhobby}=action.payload;
            state.hobbies=state.hobbies.map((hobbie)=>{
                if(hobbie.id===id){
                    return{
                        ...hobbie,
                        writing:writing||hobbie.writing,
                        reading:reading||hobbie.reading,
                        indoor:indoor||hobbie.indoor,
                        outdoor:outdoor||hobbie.outdoor,
                        yourhobby:yourhobby||hobbie.yourhobby,
                    }
                }
                return hobbie;
            })
        }
    },
})

export const {addHobbies,updateHobbies}=hobbieSlice.actions;

export default persistReducer(hobbiepersistConfig,hobbieSlice.reducer);