import React, { useState } from 'react'
import { useEffect } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setHomeVideos, setSortby} from "../store/videoSlice"
import { useSelector } from 'react-redux'
import {closeSideBar} from  "../store/sidebarSlice"
const VideoContainer = () => {
    const [video,setVideos]=useState([])
    const dispatch=useDispatch()
    const videoFromStore=useSelector((store)=>store.video.homeVideos)
    const sortedVideoFromStore=useSelector((store)=>store.video.sortBy)

    console.log(videoFromStore)
    const auth="AIzaSyDvZk6wvljTN_Z4zlr3RzzJ9pTeFLzRkCQ"
    useEffect(()=>{
      getData()
      dispatch(closeSideBar())
      window.scrollTo({
        top: 0,
      });
    },[])
   

   async function getData(){
      const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+auth)
    const json=await data.json()
    console.log(json)
    setVideos((c)=>json.items)
    dispatch(setHomeVideos(json.items))
    dispatch(setSortby(json.items))
    }
  return (
<div className="flex flex-wrap items-center justify-center gap-4 p-4">
  {sortedVideoFromStore.map((val) => (
    <Link
      key={val.id} // Add a key for better list rendering performance
      className="block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm "
      to={"/watch?v=" + val.id}
    >
      <VideoCard info={val} />
    </Link>
  ))}
</div>


  )
}

export default VideoContainer
