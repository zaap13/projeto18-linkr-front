import { PostCard, UrlBox, UrlImg, UserImg } from "../assets/styles/styles";
import { ReactTagify } from "react-tagify";
import { FaTrash, FaEdit } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import { useEffect, useRef, useState } from "react";
import { InputContainer, SearchButton } from "./Header/HeaderStyle";
import { CommentContainer, CommentContent, CommentContentTitle, CommentsStyle, ContainerToComment, InputContainerToComment } from "./CommentsStyle";

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
    <>
      <PostCard>
        {ownerName === username && (
          <>
            <FaTrash color="#FFFFFF" size="14px" onClick={deletePost} />
            <FaEdit color="#FFFFFF" size="18px" onClick={() => setEditing(!isEditing)} />
          </>
        )}
        <AiOutlineHeart color="#FFFFFF" size="20px" />
        <AiOutlineComment color="#FFFFFF" size="20px" />
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

      <CommentsStyle>
        <div>
          <CommentContainer>
            <img src="https://br.mundo.com/fotos/201508/desenhos-2-600x559.jpg" alt="" />
            <CommentContent>
              <CommentContentTitle>
                <h1>Nome de quem comentou </h1>
                <span> * following/ * post's author ou não</span>
              </CommentContentTitle>
              <p>Comentário aqui</p>
            </CommentContent>
          </CommentContainer>
        </div>

        <ContainerToComment>
          <img src="https://br.mundo.com/fotos/201508/desenhos-2-600x559.jpg" alt="profile" />
          <InputContainerToComment>
            <input type="search" placeholder="Write a comment..." />
            <SearchButton type="submit">
              <TbBrandTelegram size="20px" color="#C6C6C6" />
            </SearchButton>
          </InputContainerToComment>
        </ContainerToComment>
      </CommentsStyle>
    </>
  );
}
