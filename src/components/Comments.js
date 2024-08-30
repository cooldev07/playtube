import React from 'react'

const Comments = ({comments}) => {
  return (
<div className="mt-6 px-4">
  <h1 className="text-2xl font-semibold mb-6 text-red-600">Comments</h1>
  {comments?.length === 0 ? (
    <div className="text-center text-gray-600">
      <p>No comments yet.</p>
    </div>
  ) : (
    comments?.map((one, index) => (
      <div
        key={index}
        className="border border-red-300 rounded-lg shadow-md p-4 mb-4 bg-white"
      >
        <h3 className="text-lg font-semibold text-red-600 mb-2">
          {one?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </h3>
        <p className="text-gray-700">{one?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
      </div>
    ))
  )}
</div>


  )
}

export default Comments
