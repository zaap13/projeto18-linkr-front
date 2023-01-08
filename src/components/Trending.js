import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import { TrendingStyle } from "../assets/styles/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";

export default function Trending() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("linkr"));
  const [trendingList, setList] = useState([]);

  function getTrending(setList) {
    const promise = axios.get(`${BASE_URL}/trending`, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    promise.then((resp) => setList(resp.data));
    promise.catch((error) => console.log(error));
  }

  useEffect(() => {
    getTrending(setList);
  }, []);

  return (
    <TrendingStyle>
      <div>
        <h2>trending</h2>
      </div>

      {trendingList.map((t) => (
        <ReactTagify
          colors={"white"}
          tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1)}`)}
        >
          <spam>{t.name}</spam>
        </ReactTagify>
      ))}
    </TrendingStyle>
  );
}
