import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContext } from "../context/videoContext";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos, isLoading, error } = useContext(VideoContext);

  return (
    <div className="flex">
      <Sidebar />

      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorDisplay error={error} />
        ) : (
          videos?.map(
            (i) =>
              i.type === "video" && (
                <VideoCard key={i.videoId} video={i} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
