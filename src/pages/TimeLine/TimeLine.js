import axios from "axios";
import { useEffect, useState } from "react";
import { Main, Title } from "../../assets/styles/styles";
import { BASE_URL } from "../../constants/url";
import Post from "../../components/Post";
import PostCreator from "./PostCreator";
import Header from "../../components/Header/Header";

export default function TimeLine() {
  const user = JSON.parse(localStorage.getItem("linkr"));
  const [postsList, setList] = useState([]);

  function getPosts(setList) {
    const promise = axios.get(`${BASE_URL}/posts`, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    promise.then((resp) => setList(resp.data));
    promise.catch((error) => console.log(error));
  }

  useEffect(() => {
    getPosts(setList);
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Title>timeline</Title>
        <PostCreator setList={setList} getPosts={getPosts} />
        {postsList.map((post) => (
          <Post
            key={post.id}
            name={post.name}
            content={post.content}
            url={post.url}
            picture={post.picture}
          />
        ))}
      </Main>
    </>
  );
}
