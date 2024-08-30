import React from 'react'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const SearchPage = () => {
    const searchResult=useSelector((store)=>store.search?.searchResult)
    console.log(searchResult)
  return (
    <div className='flex flex-wrap items-center justify-center gap-4'>
    {searchResult.map((val) => (
      <Link
        key={val?.id?.videoId}  // Ensure each Link has a unique key
        className='block w-full sm:w-[350px] md:w-[300px] lg:w-[350px] xl:w-[400px]'
        to={`/watch?v=${val?.id?.videoId}`}
      >
        <VideoCard info={val} />
      </Link>
    ))}
  </div>
  
  )
}

export default SearchPage
