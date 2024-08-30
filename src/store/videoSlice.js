import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const movieSlice=createSlice({
    name:"video",
    initialState:{
        selectedVideo:null,
        homeVideos:[],
        sortBy:[],
        bookmarkVideos:[],
        history:[]
    },
    reducers:{
        setHomeVideos:(state,action)=>{
            state.homeVideos=action.payload;
        },
        setSortby:(state,action)=>{
           state.sortBy=action.payload
        },
        setSortbyOld: (state, action) => {
            state.sortBy = state.sortBy.sort((a, b) => {
              const dateA = new Date(a?.snippet?.publishedAt);
              const dateB = new Date(b?.snippet?.publishedAt);
              return dateA - dateB;
            });
          },
          setSortbyNew: (state, action) => {
            state.sortBy = state.sortBy.sort((a, b) => {
              const dateA = new Date(a?.snippet?.publishedAt);
              const dateB = new Date(b?.snippet?.publishedAt);
              return dateB- dateA;
            });
          },
          setSortbyReset:(state,action)=>{
            state.sortBy=action.payload
          },
       setSelectedVideo:(state,action)=>{
        state.selectedVideo=action.payload;
       },
       setBookmarkVideos:(state,action)=>{
        if(!state.bookmarkVideos.includes(action.payload)){
            state.bookmarkVideos.push(action.payload)

        }
       }
       ,removeBookmarkVideo:(state,action)=>{
        state.bookmarkVideos=state.bookmarkVideos.filter((val)=>val !==action.payload)
       },
       setHistory:(state,action)=>{
        state.history.push(action.payload);
       },
       clearHistory:(state,action)=>{
        state.history=[];
       }
    }
})
export default movieSlice.reducer;
export const {setSelectedVideo,setBookmarkVideos,removeBookmarkVideo,setHistory,clearHistory,setHomeVideos, setSortby, setSortbyOld,setSortbyNew,
    setSortbyReset
}=movieSlice.actions;