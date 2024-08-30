import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSideBar } from '../store/sidebarSlice'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
const Sidebar = () => {
    const navigation=["Home","Subscription","Liked Videos"]
    const dispatch=useDispatch()
    const showSidebar=useSelector((sotre)=>sotre.sidebar.showSidebar)
    function handleClose(){
        dispatch(closeSideBar());
    }
    useEffect(()=>{
      dispatch(closeSideBar())
    },[])
    if(!showSidebar)return;
  return (
    <div className="z-50 border-r border-red-500 fixed top-0 left-0 h-full w-64 bg-white shadow-xl transition-all duration-300 hover:w-80">
  <div className="relative h-full flex flex-col">
    {/* Close Button in the Top-Right Corner */}
    <div className="absolute top-4 right-4">
      <IoMdClose 
        onClick={handleClose}
        className="cursor-pointer h-10 w-10 text-red-500 hover:text-white hover:bg-red-500 rounded-full transition-colors duration-200"
      />
    </div>
    <ul className="flex flex-col items-center gap-6 p-6 mt-14">
      {/* Navigation Links */}
      <li className="w-full group">
        <Link
          to="/body"
          className="flex items-center w-full text-red-500 hover:text-white p-3 rounded-md hover:bg-red-500 transition-colors duration-200 group-hover:w-full"
        >
          <span className="ml-3 text-lg font-semibold">Home</span>
        </Link>
      </li>
      <li className="w-full group">
        <Link
          to="/history"
          className="flex items-center w-full text-red-500 hover:text-white p-3 rounded-md hover:bg-red-500 transition-colors duration-200 group-hover:w-full"
        >
          <FaHistory />
          <span className="ml-3 text-lg font-semibold">History</span>
        </Link>
      </li>
      <li className="w-full group">
        <Link
          to="/bookmark"
          className="flex items-center w-full text-red-500 hover:text-white p-3 rounded-md hover:bg-red-500 transition-colors duration-200 group-hover:w-full"
        >
          <CiBookmark />
          <span className="ml-3 text-lg font-semibold">Bookmarks</span>
        </Link>
      </li>
    </ul>
  </div>
</div>

  )
}

export default Sidebar
