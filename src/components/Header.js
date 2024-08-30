import React, { useState } from 'react'
import Logo from "../assets/download.png"
import logo from "../assets/coollogo_com-23986673.png"
import { useDispatch } from 'react-redux'
import {  openSidebar} from "../store/sidebarSlice"
import { Link, useNavigate} from 'react-router-dom'
import {setSearchResult} from "../store/searchSlice"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { setSearchFor } from '../store/searchSlice'
// 

import { auth } from "../firebas"
import {  signOut } from "firebase/auth";
import { useEffect } from 'react';
import {getAuth, onAuthStateChanged } from 'firebase/auth';
const Header = () => {
  const YOUTUBE_SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&";
const [search,setSearch]=useState(null)
   const authY="AIzaSyDvZk6wvljTN_Z4zlr3RzzJ9pTeFLzRkCQ"
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
           if (user) {
             const {email,displayName,uid} = user;
             if(window.location.pathname==="/"){
          navigate("/body")
             }
             // ...
           } else {
             // User is signed out
             // ...
          navigate("/")

           }
         });
         // unsubscribe when the component unmounts
         return ()=>unsubscribe();
   },[])

function handleOpen(){
  dispatch(openSidebar())
}

async function getData(){
const data=await fetch(YOUTUBE_SEARCH_RESULTS_API+`q=${search}&key=${authY}`)
const json=await data.json()
console.log(json)
dispatch(setSearchResult(json.items))
dispatch(setSearchFor(search))
navigate("/search")
}

function handleSearch(e){
e.preventDefault()
  getData()
}
// 
function hanldeSignout(e){
  e.preventDefault();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}


  return (
<div className='flex flex-col md:flex-row justify-between items-center z-50 p-4'>
    {/* Logo and Hamburger Menu */}
    <div className='flex justify-between items-center w-full md:w-auto mb-4 md:mb-0'>
      <GiHamburgerMenu 
        onClick={handleOpen}
        className='cursor-pointer h-8 w-8'  // Remove `md:hidden` to ensure visibility across all sizes
      />
     <Link
         to="/body"
     > <img src={logo} 
    
      className='cursor-pointer h-16 md:h-16 pl-4' alt='logo' />
      </Link>
    </div> 
    
    {/* Search Form */}
    <form className='flex items-center w-full md:w-[42%] mb-4 md:mb-0'>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className='h-10 w-full md:w-[70%] pl-4 border border-gray-500 border-r-0 rounded-l-xl'
        type='text'
        placeholder='Search'
      />
      <IoSearch 
        onClick={handleSearch}
        className='cursor-pointer h-10 w-12 border border-l-0 border-gray-500 rounded-r-xl'
      />
    </form>
    
    {/* Sign Out Button */}
    <button
      onClick={hanldeSignout}
      className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
    >
      Sign Out
    </button>
  </div>

  
  )
}

export default Header
