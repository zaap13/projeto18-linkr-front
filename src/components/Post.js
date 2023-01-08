import { PostCard } from "../assets/styles/styles";
//import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";

export default function Post({ name, picture, content, url, likes, whoLiked }) {
  const navigate = useNavigate();

  return (
    <PostCard>
      <img src={picture} alt="profile"></img>
      <h1>{name}</h1>
      <p>{likes} likes</p>
      {likes > 1 ? <p>{whoLiked[0]} e outras {likes-1} pessoas</p> : <p>{whoLiked[0]} amou isso</p>}
      <p>{content}</p>      
      {/* <ReactTagify
        colors={"white"}
        tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1)}`)}
      >
        <p>{content}</p>
      </ReactTagify> */}
      <a href={url}>{url}</a>
    </PostCard>
  );
}
