import React from 'react'
import { useDispatch } from 'react-redux';
import {setSelectedVideo} from "../store/videoSlice"
import moment from 'moment';
const VideoCard = ({info}) => {
  const dispatch=useDispatch()
  const video=info;
function hanldeSelect(){
  dispatch(setSelectedVideo(video))
}
const formatDuration = (duration) => {
  if(!duration)return;
  const match = duration?.match(/PT(\d+M)?(\d+S)?/);
  const minutes = match[1] ? match[1]?.replace('M', '') : '0';
  const seconds = match[2] ? match[2]?.replace('S', '') : '00';
  return `${minutes}:${seconds?.padStart(2, '0')}`;
};
const videoTitle = video?.snippet?.title;
const channelName = video?.snippet?.channelTitle;
const thumbNails = video?.snippet?.thumbnails?.medium?.url;
const viewCount = video?.statistics?.viewCount;
const publishedAt = video?.snippet?.publishedAt;
const duration = video?.contentDetails?.duration;
const formattedViewCount = Intl.NumberFormat('en', { notation: 'compact' }).format(viewCount);
  const formattedDuration = formatDuration(duration)||null;
  const timeAgo = moment(publishedAt).fromNow();
  return (

<div
  onClick={hanldeSelect}
  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
>
  <div className="relative">
    <img
      src={thumbNails}
      alt="thumbnail"
      className="w-full h-[200px] object-cover"
    />
    <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
      {formattedDuration}
    </span>
  </div>
  <div className="p-4">
    <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
      {videoTitle}
    </h3>
    <h6 className="text-sm text-gray-700 mb-2">{channelName}</h6>
    <div className="text-xs text-gray-500 flex justify-between">
      {!isNaN(formattedViewCount) && (
        <span>{formattedViewCount} views</span>
      )}
      <span>{timeAgo}</span>
    </div>
  </div>
</div>

  )
}

export default VideoCard
