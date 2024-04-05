import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import { useEffect, useState } from "react";
import SideBar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";

const Results = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [page, setPage] = useState(1);

  const query = searchParams.get("search_query");

  useEffect(() => {
    const params = {
      query: query,

      token: page > 1 ? token : undefined,
    };
    api
      .get(`/search`, { params })
      .then((res) => {
        setToken(res.data.continuation);
        setData((prev) => prev.concat(res.data.data));
      })
      .catch((err) => console.log(err.message));
  }, [page, token]);

  return (
    <div className="flex gap-3">
      <SideBar />
      <div className="mx-auto h-[90vh] overflow-auto p-4">
        <h2 className="text-xl mb-5">
          <span className="font-bold">{query} </span>için sonuçlar
        </h2>
        <div className="flex flex-col gap-5 justify-center">
          {data?.map(
            (i) =>
              i.type === "video" && (
                <VideoCard key={i.id} video={i} isRow={true} />
              )
          )}
          <button
            onClick={() => setPage(page + 1)}
            className="bg-zinc-600 py-2 px-5 rounded-md-10 hover:bg-zinc-800 transition"
          >
            Daha fala
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Results;
