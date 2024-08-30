import { createSlice } from "@reduxjs/toolkit";
const searchSlice=createSlice({
    name:"search",
    initialState:{
        searchResult:null,
    },
    reducers:{
      setSearchResult:(state,action)=>{
        state.searchResult=action.payload
      }
    }
})
export default searchSlice.reducer;
export const {setSearchResult}=searchSlice.actions;