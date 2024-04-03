import millify from "millify";
import { useState } from "react";
import { LuDot } from "react-icons/lu";

const VideoCard = ({ video }) => {
  const [isHover, setIsHover] = useState(false);
  console.log(video);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="cursor-pointer"
    >
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt={video.title}
        />
      </div>
      <div className="flex gap-4 mt-5">
        <div>
          <img
            className="w-14 h-14 rounded-full"
            src={video.channelThumbnail[0]?.url}
            alt=""
          />
        </div>
        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>
          <h5>{video.channelTitle}</h5>
          <div className="flex gap-3">
            <p className="flex gap-1">
              <span>{millify(video.viewCount)} Görüntüleme</span>
              <LuDot size={24} />
            </p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
