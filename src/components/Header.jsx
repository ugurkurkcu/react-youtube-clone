import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { FaBell } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    if (text.trim() === "") {
      return;
    }

    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="flex items-center justify-between p-4">
      <Link to={"/"} className="flex items-center gap-2">
        <img className="w-[50px]" src="../public/youtube.png" alt="logo" />
        <h1 className="text-2xl hidden md:block">YouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="group border border-gray-400 rounded-[20px] overflow-hidden items-center flex"
      >
        <input
          placeholder="Ara"
          className="bg-black text-white px-3 py-1 outline-none group-hover:border-red-700 group-hover:border border border-transparent rounded-l-[20px] focus:border focus:border-blue-400"
          type="text"
        />
        <button className="border-l p-2 text-lg bg-zinc-700">
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
