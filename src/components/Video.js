import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ url })=>{

    return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url = {url}
            width='60%'
            height='60%'
            controls = {true}
            />
        </div>
    )
}

export default Video;