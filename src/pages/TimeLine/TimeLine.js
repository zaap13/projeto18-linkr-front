import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Main, Title } from "../../assets/styles/styles";
import { BASE_URL } from "../../constants/url";
import Post from "../../components/Post";
import PostCreator from "./PostCreator";
import Header from "../../components/Header/Header";
import Trending from "../../components/Trending";

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
  };

  useEffect(() => {
    getPosts(setList);
  }, []);



  function updatePostFromState(postId, form) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.put(`${BASE_URL}/posts/${postId}`, form, config)
    .then((res) => {
      console.log(res.data);
      getPosts(setList);
    })
    .catch(() => console.log("error"));
  };

  return (
    <Container>
      <Header />
      <Main>
        <Title>timeline</Title>
        <PostCreator setList={setList} getPosts={getPosts} />
        {postsList.map((post) => (
          <Post
            key={post.id}
            post={post} 
            updatePostFromState={updatePostFromState}
          />
        ))}
      </Main>
      <Trending />
    </Container>
  );
}
