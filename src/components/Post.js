import { PostCard } from "../assets/styles/styles";
import { ReactTagify } from "react-tagify";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../constants/url";

export default function Post({ userId, name, picture, content, url, likes, whoLiked }) {
  const navigate = useNavigate();

  return (
    <PostCard>
      <Link to={`${BASE_URL}/user/${userId}`}>
        <img src={picture} alt="profile"></img>
        <h1>{name}</h1>
      </Link>
      <p>{likes} likes</p>
      {/* {likes > 1 ? <p>{whoLiked[0]} e outras {likes - 1} pessoas</p> : <p>{whoLiked[0]}</p>} */}
      <p>{content}</p>
      <ReactTagify
        colors={"white"}
        tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1)}`)}
      >
        <p>{content}</p>
      </ReactTagify>
      <a href={url}>{url}</a>
    </PostCard>
  );
}
