import axios from "axios";
import { useEffect, useState } from "react";
import { Main, Title } from "../../assets/styles/styles";
import { BASE_URL } from "../../constants/url";
import Post from "../../components/Post";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";

export default function Hashtag() {
  const { hashtag } = useParams();
  const user = JSON.parse(localStorage.getItem("linkr"));

  function getPosts(setList) {
    const promise = axios.get(`${BASE_URL}/hashtag/${hashtag}`, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    promise.then((resp) => setList(resp.data));
    promise.catch((error) => console.log(error));
  }
  const [postsList, setList] = useState([]);
  useEffect(() => {
    getPosts(setList);
  }, [hashtag]);
  return (
    <>
      <Header />
      <Main>
        <Title>#{hashtag}</Title>
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
