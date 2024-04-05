import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";

const Comments = ({ data }) => {
  return (
    <div className="my-6 py-4 px-1">
      <h2 className="text-lg font-bold">{data.commentsCount} Yorum</h2>
      <input
        className="w-full bg-transparent border-b-[.5px] mb-5 p-2 outline-none"
        placeholder="Yorum Ekleyin"
        type="text"
      />
      {data.data.map((item) => (
        <div className="mt-3 flex gap-2 items-start">
          <img
            className="rounded-full"
            src={item.authorThumbnail[0].url}
            alt="logo"
          />
          <div className="flex flex-col gap-2">
            <h5 className="flex gap-2 items-center mb-2">
              <span className=" ">{item.authorText} </span>
              <span className="text-sm font-thin text-gray-300">
                {" "}
                {item.publishedTimeText}
              </span>
            </h5>

            <p className="text-sm font-thin "> {item.textDisplay}</p>

            <div className="flex items-center gap-3 cursor-pointer">
              <AiFillLike />

              <span className="text-sm text-gray-400">{item.likesCount}</span>

              <AiFillDislike />
              <p className="hover:text-gray-400 hover:cursor-pointer">
                Yanıtla
              </p>
            </div>
            {item.replyCount > 0 && (
              <div className="flex items-center gap-1 text-blue-500 w-fit py-1 px-3 rounded-full hover:bg-[#0000ff99]">
                <FaCaretDown />
                <span className="text-sm">{item.replyCount} Yanıt</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
