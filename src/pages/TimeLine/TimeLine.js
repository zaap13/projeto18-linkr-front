import axios from "axios";
import { useEffect, useState } from "react";
import { PublicMain } from "../../assets/styles/styles";
import { BASE_URL } from "../../constants/url";
import Post from "./Post";
import PostCreator from "./PostCreator";
import Header from "../../components/Header/Header";

function getPosts(setList) {
  const promise = axios.get(`${BASE_URL}/posts`);
  promise.then((resp) => setList(resp.data));
  promise.catch((error) => console.log(error));
}

export default function TimeLine() {
  const [postsList, setList] = useState([]);
  useEffect(() => {
    getPosts(setList);
  }, []);
  return (
    <>
      <Header />
      <PublicMain onlyColumn={true}>
        <PostCreator setList={setList} getPosts={getPosts} />
        {postsList.map((post) => (
        <Post />
        ))}
      </PublicMain>
    </>    
  );
}
