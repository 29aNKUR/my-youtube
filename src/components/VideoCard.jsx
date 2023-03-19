import React from 'react'


const VideoCard = ({info}) => {
    // console.log(info);


    //this will give error because data is not present on first rendering
    // const { snippet,statistics} = info;

    // const { title, thumbnails, channelTitle} = snippet;

    // const { viewCount } = statistics

    const { title,thumbnails,channelTitle } = info?.snippet || {};
    const { viewCount } = info?.statistics || {};

  


  return (
    <div className="w-64 p-2 m-2 shadow-lg">  
       <img className="rounded-lg hover:rounded-none" src={thumbnails?.high?.url} alt="thumbnail" />
       <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
       </ul>
    </div>
  )
}

export default VideoCard