import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Main, Title, Gif } from "../../assets/styles/styles";
import { BASE_URL, loading_url } from "../../constants/url";
import Post from "../../components/Post";
import PostCreator from "./PostCreator";
import Header from "../../components/Header/Header";
import Trending from "../../components/Trending";

export default function TimeLine() {
  const user = JSON.parse(localStorage.getItem("linkr"));
  const [postsList, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  function getPosts(setList) {
    const promise = axios.get(`${BASE_URL}/posts`, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    promise.then((resp) => {
      setList(resp.data);
      setLoading(false)
    });
    promise.catch((error) => console.log(error));
  }

  useEffect(() => {
    getPosts(setList);
  }, []);

  console.log(postsList)
  if (loading === true) {
    return (
      <Main>
        <Header />
        <Gif>
          <img src={loading_url} alt="loading" />
        </Gif>
      </Main>
    );
  }

  return (
    <Container>
      <Header />
      <Main>
        <Title>timeline</Title>
        <PostCreator setList={setList} getPosts={getPosts} />
        {postsList.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Main>
      <Trending />
    </Container>
  );
}
