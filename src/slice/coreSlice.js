import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const corepersistConfig={
    key:'core',
    storage,
}

const coreSlice=createSlice({
    name:'cores',
    initialState:{
        core:[] //an array to add core skills
    },
    reducers:{
        addCoreSkills:(state,action)=>{
            state.core.push(action.payload);
        },
        updateCore:(state,action)=>{
            const {id,language,course,certification,project,desc}=action.payload;
            state.core=state.core.map((kill)=>{
                if(kill.id===id){
                    return{
                        ...kill,
                        language:language||kill.language,
                        course:course || kill.course,
                        certification:certification||kill.certification,
                        project:project||kill.project,
                        desc:desc||kill.desc,
                    }
                }
                return kill;
            })
        }
    },
})

export const {addCoreSkills,updateCore}=coreSlice.actions;

export default persistReducer(corepersistConfig,coreSlice.reducer);