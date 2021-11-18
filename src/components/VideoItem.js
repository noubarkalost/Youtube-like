import React from 'react';
import "./VideoItem.css"

const VideoItem = ({video, selcetedVideo}) => {
    return (
        <div onClick={()=>{selcetedVideo(video)}} className="item video-item">
            <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} className="ui image"/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>

            </div>

        </div>
    );
};

export default VideoItem;