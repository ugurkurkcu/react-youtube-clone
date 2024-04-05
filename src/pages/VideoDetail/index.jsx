import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import VideoInfo from "./VideoInfo";
import ChannelInfo from "./ChannelInfo";
import VideoCard from "../../components/VideoCard";
import Comments from "./Comments";

const VideoDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const [video, setVideo] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    api
      .get(`/video/info?id=${id}&extend=1`)
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err.message));

    api
      .get(`https://yt-api.p.rapidapi.com/comments?id=${id}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err.message));
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto p-5 lg:px-20">
      <div>
        <div className="h-[50vh] lg:h-[60vh] rounded-md overflow-hidden">
          <ReactPlayer
            playing
            controls
            light
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        {!video ? (
          <p></p>
        ) : (
          <>
            <h1 className="font-bold my-3">{video.title}</h1>
            <ChannelInfo video={video} />
            <VideoInfo video={video} />
            <Comments data={comments} />
          </>
        )}
      </div>
      <div className="px-10 flex flex-col gap-5">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === "video" && (
              <VideoCard key={item.videoId} video={item} isRow={true} />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
