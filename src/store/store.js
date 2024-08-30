import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice"
import videoReducer from "./videoSlice"
import searchSlice from "./searchSlice";
const store=configureStore({
   reducer:{
       sidebar:sidebarReducer,
      video:videoReducer,
      search:searchSlice
   }
});
export default store