import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { clearHistory } from '../store/videoSlice'
import { useDispatch } from 'react-redux'
import {closeSideBar} from  "../store/sidebarSlice"
const History = () => {
  const history=useSelector(store=>store.video.history)
  const dispatch=useDispatch();
  function handleClear(){
dispatch(clearHistory())
  }
  useEffect(()=>{
    dispatch(closeSideBar())
  },[])
  return  (
<div className="container mx-auto px-4 py-6">
  {/* Container for Button and History */}
  <div className="flex justify-end mb-6">
    {/* Clear History Button */}
    <button
      onClick={handleClear}
      className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-lg hover:bg-red-700 transition-colors duration-150 ease-in-out"
    >
      Clear History
    </button>
  </div>

  {/* History Videos */}
  {history.length === 0 ? (
    <div className="text-center text-gray-600">
      <p>No videos in history.</p>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {history.map((val) => (
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
              className="absolute inset-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  )}
</div>


  );
}

export default History
