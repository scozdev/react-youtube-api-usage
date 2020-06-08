import React from "react";
import List from "@material-ui/core/List";

import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <List>
      <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
    </List>
  ));

  return (
      
     <div>
       {listOfVideos}
     </div>
    );
}
