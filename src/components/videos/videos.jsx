import React from 'react';
import Video from '../video/video';

const Videos = (props) => {
    return (
        <ul>
           {props.videos.map(video => 
           <Video 
                video={video}
                key={video.id}
           />
           )} 
        </ul>
    );
};

export default Videos;