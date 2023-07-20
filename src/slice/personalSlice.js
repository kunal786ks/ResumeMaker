import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const detailspersistConfig={
    key:'detail',
    storage,
}
const personalSlice=createSlice({
    name:'detail',
    initialState:{
        details:[] //an array to store details of multiple users;
    },
    reducers:{
        addDetails:(state,action)=>{
            state.details.push(action.payload);
        },
        updateDetails:(state,action)=>{
            const {id,firstName,lastName,companyName,address,email,phone,info}=action.payload
            state.details=state.details.map((detail)=>{
                if(detail.id===id){
                    return {
                        ...detail,
                        firstName: firstName || detail.firstName,
                        lastName : lastName || detail.lastName,
                        companyName : companyName || detail.companyName,
                        email : email || detail.email,
                        address:address || detail.address,
                        phone : phone || detail.phone,
                        info : info || detail.info
                    };
                }
                return detail;  
            })
        },
    },
})

export const {addDetails,updateDetails}=personalSlice.actions;

export default persistReducer(detailspersistConfig,personalSlice.reducer);