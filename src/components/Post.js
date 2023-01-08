import { PostCard } from "../assets/styles/styles";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";

export default function Post({ name, picture, content, url }) {
  const navigate = useNavigate();

  return (
    <PostCard>
      <img src={picture} alt="profile"></img>
      <h1>{name}</h1>
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
