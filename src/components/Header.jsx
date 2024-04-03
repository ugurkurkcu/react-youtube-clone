import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { FaBell } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Link className="flex items-center gap-2">
        <img className="w-[50px]" src="../public/youtube.png" alt="logo" />
        <h1 className="text-2xl hidden md:block">YouTube</h1>
      </Link>
      <form className="border border-gray-400 rounded-[20px] overflow-hidden items-center flex">
        <input
          className="bg-black text-white px-3 py-1 outline-none"
          type="text"
        />
        <button className="border-l px-2 text-xl">
          <FaSearch />
        </button>
      </form>
      <div className="flex gap-3">
        <FaBell className="hover:text-gray-400 transition duration-[200ms]" />
        <IoIosVideocam className="hover:text-gray-400 transition duration-[200ms]" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-[200ms]" />
      </div>
    </header>
  );
};


export default Header;
