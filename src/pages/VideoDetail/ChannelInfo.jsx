import { AiFillDislike, AiFillLike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <img
          src={video.channelThumbnail[0].url}
          alt="logo"
          className="rounded-full w-12 h-12"
        />
        <div>
          <h4 className="font-bold">{video.channelTitle} </h4>
          <p className="text-gray-400">{video.subscriberCountText} Abone</p>
        </div>
        <button className="bg-white text-black px-3 h-9 transition hover:bg-gray-400 rounded-full">
          Abone Ol
        </button>
      </div>
      <div className="flex items-center bg-darkGray rounded-full cursor-pointer">
        <div className="py-2 px-6 border-r">
          <AiFillLike />
        </div>
        <div className="py-2 px-6 ">
          <AiFillDislike />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
