import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
//   const {snippet, statistics} = info;
//   const {channelTitle, title, thumbnails} = snippet;

const viewCount = info?.statistics.viewCount; 
let formattedViewCount =''; 

if (Number(viewCount) >= 1000000) {
  formattedViewCount = (Number(viewCount) / 1000000).toFixed(1) + 'M'; // Format for millions
} else if (Number(viewCount) >= 1000) { // Check for thousands
  formattedViewCount = (Number(viewCount) / 1000).toFixed(0) + 'K'; // Format for thousands
}else {
  formattedViewCount = viewCount.toString(); // Default: display as string
}

  return (
    <div className="w-[18.5rem] py-2 px-2 m-2 rounded-[15px] hover:bg-[#f2f2f2] hover:shadow-sm cursor-pointer">
      <img className="rounded-[15px]" src={info?.snippet?.thumbnails?.medium.url} alt="" />
      <h2 className="font-semibold mt-1 leading-5">{info?.snippet?.title}</h2>
      <p className="text-gray-800 text-[14px] mt-1">{info?.snippet?.channelTitle}</p>
      <p className="text-gray-800 text-[14px]">{formattedViewCount} views</p>
    </div>
  );
};

export default VideoCard;
