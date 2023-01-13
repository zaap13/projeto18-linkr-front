import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, loading_url } from "../../constants/url";
import { Container, Main } from "../../assets/styles/styles";
import { ContainerPosts, Gif, Title } from "./UserPageStyle";
import Header from "../../components/Header/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";

export default function UserPage() {
  let { id } = useParams();
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFollowed, setIsFollowed] = useState(null);

  const user = JSON.parse(localStorage.getItem("linkr"));
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/${id}`, config)
      .then((res) => {
        setUserData(res.data);
        setIsFollowed(res.data.following);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  function follow() {
    console.log('em follow')
    if (isFollowed === false) {
      axios
        .post(`${BASE_URL}/user/follow/${id}`, config)
        .then(() => setIsFollowed(true))
        .catch((err) => {
          alert("Sorry, something went wrong.")
          console.log(err.data)
        })
    };
    if (isFollowed === true) {
      axios
        .delete(`${BASE_URL}/user/unfollow/${id}`, config)
        .then(() => setIsFollowed(false))
        .catch((err) => {
          alert("Sorry, something went wrong.")
          console.log(err.data)
        })
    };
  };

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
      <Main>
        <Header />
        <ContainerPosts>
          <Title>
            <div>
              <img src={userData.picture} alt="profile identification" />
              <h1>{userData.username}'s posts</h1>
            </div>
            <button onClick={() => follow}>
              {isFollowed === true ? <p>Unfollow</p> : <p>Follow</p>}
            </button>
          </Title>
          {userData.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ContainerPosts>
      </Main>
      <Trending />
    </Container>
  );
}
