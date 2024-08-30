import { createSlice } from "@reduxjs/toolkit";
const searchSlice=createSlice({
    name:"search",
    initialState:{
        searchResult:null,
        searchFor:"",
    },
    reducers:{
      setSearchFor:(state,action)=>{
        state.searchFor=action.payload
      },
      setSearchResult:(state,action)=>{
        state.searchResult=action.payload
      }
     
    }

})
export default searchSlice.reducer;
export const {setSearchResult,setSearchFor}=searchSlice.actions;