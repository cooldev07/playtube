import { createSlice } from "@reduxjs/toolkit";
const sidebarSlice=createSlice({
    name:"sidebar",
    initialState:{
        showSidebar:false
    },
    reducers:{
        openSidebar:(state,action)=>{
            state.showSidebar=true
        },
        closeSideBar:(state,action)=>{
            state.showSidebar=false
        }
    }
})
export default sidebarSlice.reducer;
export const {openSidebar,closeSideBar}=sidebarSlice.actions;