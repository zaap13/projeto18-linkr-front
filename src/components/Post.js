import { PostCard, UrlBox, UrlImg, UserImg } from "../assets/styles/styles";
import { ReactTagify } from "react-tagify";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import { useEffect, useRef, useState } from "react";

export default function Post({ post, deletePostFromState, updatePostFromState }) {
  const navigate = useNavigate();
  const ownerName = JSON.parse(localStorage.getItem("linkr")).username;
  const {
    userId,
    username,
    picture,
    content,
    url,
    title,
    description,
    image,
    likes,
    whoLiked,
  } = post;
  const contentEdit = useRef(null);
  const [isEditing, setEditing] = useState(false);
  const [form, setForm] = useState({ content: "" });

  function deletePost() {
    const confirmDelete = window.confirm(
      "Tem certeza que você quer excluir este post?"
    );
    if (confirmDelete) {
      deletePostFromState(post.id);
    };
  };

  function updatePost(form) {
    updatePostFromState(post.id, form);
  };

  function handleForm(e, form, setForm) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isEditing) {
      contentEdit.current.focus();
    };
  }, [isEditing]);

  return (
    <PostCard>
      {ownerName === username && (
        <>
          <FaTrash color="#FFFFFF" size="14px" onClick={deletePost} />
          <FaEdit color="#FFFFFF" size="18px" onClick={() => setEditing(!isEditing)} />
        </>
      )}
      <Link to={`${BASE_URL}/user/${userId}`}>
        <UserImg src={picture} alt="profile" />
        <h1>{username}</h1>
      </Link>
      <p>{likes} likes</p>
      {likes > 1 ? (
        <p>
          {whoLiked[0]} e outras {likes - 1} pessoas
        </p>
      ) : (
        whoLiked && <p>{whoLiked[0]}</p>
      )}

      {content && (
        <>
          {isEditing ? (
            <form onSubmit={() => updatePost(form)}>
              <input
                onChange={(e) => handleForm(e, form, setForm)}
                ref={contentEdit} 
                name="content"
                placeholder="Edit your article"
              />
              <button type="submit"></button>
            </form>
          ) : (
            <ReactTagify
            colors={"white"}
            tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1)}`)}
          >
            <p>{content}</p>
          </ReactTagify>
          )}
        </>
      )}
      <a href={url} target="_blank" rel="noreferrer noopener">
        <UrlBox>
          <h2>{title}</h2>
          <p>{description}</p>
          <h3>{url}</h3>
          <UrlImg src={image} alt="url image" />
        </UrlBox>
      </a>
    </PostCard>
  );
}
