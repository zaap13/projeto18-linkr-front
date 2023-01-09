import { PostCard } from "../assets/styles/styles";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function Post({ name, picture, content, url, post, deletePostFromState }) {
  const navigate = useNavigate();

  function deletePost() {
    const confirmDelete = window.confirm("Tem certeza que você quer excluir este post?");
    if(confirmDelete) {
      deletePostFromState(post.userId);
    }
  }; 

  return (
    <PostCard>
      <img src={picture} alt="profile"></img>
      <FaTrash color="#FFFFFF" size="14px" onClick={deletePost} />
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
