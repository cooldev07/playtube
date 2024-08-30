import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeBookmarkVideo} from '../store/videoSlice'
import {closeSideBar} from  "../store/sidebarSlice"
import { useEffect } from 'react'
import { CiBookmarkRemove } from "react-icons/ci";
const BookMark = () => {
  const bookmarkVideos=useSelector(store=>store.video.bookmarkVideos)
  console.log(bookmarkVideos)
  const dispatch=useDispatch()
function removeBookmark(val){
dispatch(removeBookmarkVideo(val))
}
useEffect(()=>{
  dispatch(closeSideBar())
},[])
  return  (
    <div className="container mx-auto px-4 py-6">
    {/* Bookmark Videos */}
    {bookmarkVideos.length === 0 ? (
      <div className="text-center text-gray-600">
        <p>No bookmarks yet.</p>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bookmarkVideos.map((val) => (
          <div
            key={crypto.randomUUID()}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
              <iframe
                src={`https://www.youtube.com/embed/${val}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
            <div className="p-4 flex justify-between items-center bg-gray-100">
              <button
                onClick={() => removeBookmark(val)}
                className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md flex items-center space-x-2 hover:bg-red-700 transition-colors duration-150 text-sm md:text-base"
              >
                <CiBookmarkRemove className="h-5 w-5" />
                <span>Remove</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  
 
  );
}

export default BookMark
