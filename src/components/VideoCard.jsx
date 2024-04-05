import millify from "millify";
import { useState } from "react";
import { LuDot } from "react-icons/lu";
import { useNavigate, useNavigation } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`cursor-pointer items-center ${isRow ? "row" : ""}`}
    >
      <div>
        <img
          className="v-pic rounded-lg w-full h-full"
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
            className="c-pic w-14 h-14 rounded-full"
            src={video.channelThumbnail && video.channelThumbnail[0]?.url}
            alt=""
          />
        </div>
        <div>
          <h5 className="font-thin line-clamp-2 text-sm">{video.title}</h5>
          <h6 className="text-sm">{video.channelTitle}</h6>
          <div className="detail flex gap-3">
            <p className="flex gap-1">
              <p className="text-sm">
                {millify(video.viewCount)}{" "}
                <span className="text">Görüntüleme</span>
              </p>
              <LuDot size={24} />
            </p>
            <p className="text-sm">{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
