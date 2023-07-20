import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const edpersistConfig = {
    key: 'ed',
    storage,
}

const edSlice = createSlice({
    name: 'eds',
    initialState: {
        eds: [] //an array to add educational skills
    },
    reducers: {
        addEducation: (state, action) => {
            state.eds.push(action.payload);
        },
        updateEducation: (state, action) => {
            const { id, tenthMarks, tenthSchool, tweMarks, tweSchool, tweYear, gMarks, gName, gYear } = action.payload;
            state.eds=state.eds.map((educate)=>{
                if(educate.id === id){
                    return{
                        ...educate,
                        tenthMarks:tenthMarks || educate.tenthMarks,
                        tenthSchool : tenthSchool || educate.tenthSchool,
                        tweMarks : tweMarks || educate.tweMarks,
                        tweSchool : tweSchool || educate.tweSchool,
                        tweYear : tweYear || educate.tweYear,
                        gMarks : gMarks || educate.gMarks,
                        gName :  gName || educate.gName,
                        gYear : gYear || educate.gYear,
                    }
                }
                return educate;
            })
        }
    },
})


export const { addEducation,updateEducation } = edSlice.actions;

export default persistReducer(edpersistConfig, edSlice.reducer);