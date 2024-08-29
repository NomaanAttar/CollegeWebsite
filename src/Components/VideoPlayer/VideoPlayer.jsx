import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/images/collegeVideo.mp4'

function VideoPlayer({play,setplay}) {
  
  const closePlayer = (e)=>{
    if(e.target === player.current) {
        setplay(false)
    }
  }
  const player = useRef(null)
  return (
    <div className={`videoplayer ${play ? setplay(true) :'hide' }`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
