import React from 'react'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const SearchPage = () => {
    const searchResult=useSelector((store)=>store.search?.searchResult)
    const searchFor=useSelector((store)=>store.search?.searchFor)
  return (
    <>
    <h3 className="text-lg pl-4 py-4 text-center font-semibold text-gray-900">
  Search Results for <span className="text-red-600 font-bold italic text-2xl">{searchFor}</span>
</h3>

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
  </>
  )
}

export default SearchPage
