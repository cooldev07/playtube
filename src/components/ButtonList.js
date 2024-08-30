import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setSearchResult,setSearchFor} from "../store/searchSlice"
import { setSortbyOld,  setSortbyNew, setSortbyReset} from "../store/videoSlice"
import { useSelector } from 'react-redux';
const ButtonList = () => {
  const buttons=["All","mixes","comedy","news","gadget","fitness","bollywood songs"];
  const YOUTUBE_SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&";
  let search=""
   const auth="AIzaSyDvZk6wvljTN_Z4zlr3RzzJ9pTeFLzRkCQ"
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const videoFromStore=useSelector((store)=>store.video.homeVideos)
   async function getData(){
    const data=await fetch(YOUTUBE_SEARCH_RESULTS_API+`q=${search}&key=${auth}`)
    const json=await data.json()
    console.log(json)
    dispatch(setSearchResult(json.items))
    dispatch(setSearchFor(search))
    navigate("/search")
    }
function handleSortBy(e){
const selected=e.target.value;
if(selected==="old"){
dispatch(setSortbyOld())
}
if(selected==="new"){
  dispatch(  setSortbyNew())
}
if(selected==="reset"){
  dispatch(setSortbyReset(videoFromStore))
}
}

  return (
    <div className="flex flex-wrap w-full max-w-4xl gap-2 justify-center m-auto p-4">
    {/* Buttons */}
    {buttons.map((val) => (
      <button
        onClick={(e) => {
          search = val;
          getData();
        }}
        key={crypto.randomUUID()}
        className="bg-red-500 text-white hover:bg-red-600 active:bg-red-700 transition-colors duration-150 capitalize p-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 text-sm md:text-base"
      >
        {val}
      </button>
    ))}
    
    {/* Select Element */}
    <select
      onChange={handleSortBy}
      className="bg-white text-gray-800 border border-gray-300 rounded-lg p-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors duration-150 text-sm md:text-base"
    >
      <option value='reset' className="bg-white">Reset</option>
      <option value='new' className="bg-white">Sort by newest first</option>
      <option value='old' className="bg-white">Sort by oldest first</option>
    </select>
  </div>
  
  )
}

export default ButtonList