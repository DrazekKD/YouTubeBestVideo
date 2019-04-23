
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {

	return(
		<div onClick={()=>{onVideoSelect(video)}} className="">
			<img className="" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
			<div className="">
				<div className="">
					{video.snippet.title}
				</div>
			</div>
		</div>
	);
};

export default VideoItem;