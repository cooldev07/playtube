import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setBookmarkVideos,removeBookmarkVideo,setHistory} from "../store/videoSlice"
import Comments from './Comments';
import { CiBookmark } from "react-icons/ci";
import { CiBookmarkRemove } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
function WatchPage(){
      const auth="AIzaSyDvZk6wvljTN_Z4zlr3RzzJ9pTeFLzRkCQ"
    const [searchParams]=useSearchParams()
    const selectedVideo=useSelector(store=>store.video.selectedVideo)
    const dispatch=useDispatch()
    const bookmark=useSelector(store=>store.video.bookmarkVideos)
    const history=useSelector(store=>store.video.history)
    const navigate=useNavigate()
    // comments
    useEffect(()=>{
        getComments()
        window.scrollTo({
          top: 0,
        });
        },[])
    const [commets,setComments]=useState(null)
    if(!history.includes(searchParams.get("v"))){
        dispatch(setHistory(searchParams.get("v")))
    }
    let a=searchParams.get("v")
   async function getComments(){
            const data=await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${auth}&textFormat=plainText&part=snippet&videoId=${a}`)
            const json=await data.json()
            // console.log(json)
            setComments(json.items)
        }



    const title=selectedVideo.snippet.localized?.title;
    const channelTitle=selectedVideo.snippet?.channelTitle;
    const viewCount=selectedVideo.statistics?.viewCount;
    const likeCount=selectedVideo.statistics?.likeCount
    console.log(selectedVideo)
    // console.log(searchParams.get("v"))
    return (

<div className="container mx-auto px-4 lg:px-8 py-6">
  <div className="flex flex-col lg:flex-row lg:gap-8">
    {/* Main Video and Details Section */}
    <div className="flex-1">
      <div className="relative pb-[56.25%]">
        <iframe
          src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{title}</h2>
        <h3 className="text-md lg:text-lg text-gray-700 mt-2">Channel name: {channelTitle}</h3>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-gray-600 mt-3">
          <span className="mb-2 lg:mb-0">Views: <strong>{viewCount}</strong></span>
          <span>Likes: <strong>{likeCount}</strong></span>
        </div>
        <button
          onClick={() => {
            const videoId = searchParams.get("v");
            if (bookmark.includes(videoId)) {
              dispatch(removeBookmarkVideo(videoId));
            } else {
              dispatch(setBookmarkVideos(videoId));
            }
          }}
          className={`mt-6 px-6 py-3 rounded-md text-white ${
            bookmark.includes(searchParams.get("v")) ? 'bg-gray-600' : 'bg-red-600'
          } hover:bg-opacity-80 transition duration-150 flex items-center justify-center space-x-2`}
        >
          {bookmark.includes(searchParams.get("v")) ? (
            <span className="flex items-center space-x-2">
              <CiBookmarkRemove className="h-5 w-5 text-white" />
              <span>Unbookmark</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <CiBookmark className="h-5 w-5 text-white" />
              <span>Bookmark</span>
            </span>
          )}
        </button>
      </div>
    </div>

    {/* Comments Section */}
    <div className="w-full lg:w-96 mt-8 lg:mt-0">
      <Comments comments={commets} />
    </div>
  </div>
</div>


    )
  
}
export default WatchPage;