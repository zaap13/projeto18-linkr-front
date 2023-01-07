import { PostCard } from "../../assets/styles/styles";

export default function Post({ name, picture, content, url }) {
  return (
    <PostCard>
      <img src={picture} alt="profile"></img>
      <h1>{name}</h1>
      <p>{content}</p>
    </PostCard>
  );
}
