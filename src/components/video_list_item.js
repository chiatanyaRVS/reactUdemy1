import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect= props.onVideoSelect;
  const imgURL = props.video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className= "list-group-item">
      <div className="video_list media">
        <div className="media-left">
          <img className="media-object" src={imgURL}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
