import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/apiData';
import VideoCard, { AdVideoCard } from './VideoCard';



const VideoContainer = () => {

  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[]);  

  const getVideos = async () => {
    const data = await fetch(process.env.REACT_APP_YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json); we need to enable the API from our project on google cloud
    // console.log(json.items)
    setVideos(json.items);

  }

  return (
    <>
    <div className='flex flex-wrap'>
      <AdVideoCard info={videos[0]}/>
      {
        videos.map(video=> <Link key={video.id} to={"/watch?v="+video.id}><VideoCard info={video}/></Link>)
      }
     </div>
    </>
    
  )
}

export default VideoContainer