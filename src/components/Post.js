import {
  ButtonDiv,
  LikeDiv,
  PostCard,
  UrlBox,
  UrlImg,
  UserImg,
} from "../assets/styles/styles";
import { ReactTagify } from "react-tagify";

import { AiOutlineComment } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";

import { FaHeart, FaRegHeart, FaTrash, FaEdit } from "react-icons/fa";

import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { InputContainer, SearchButton } from "./Header/HeaderStyle";
import { CommentContainer, CommentContent, CommentContentTitle, CommentsStyle, ContainerToComment, InputContainerToComment } from "./CommentsStyle";

export default function Post({ post }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("linkr"));
  const {
    id,
    userId,
    username,
    picture,
    content,
    url,
    title,
    description,
    image,
    whoLiked,
  } = post;
  const contentEdit = useRef(null);
  const [isEditing, setEditing] = useState(false);
  const [form, setForm] = useState({ content: "" });

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  function likePost() {
    axios
      .post(`${BASE_URL}/posts/like/${id}`, {}, config)
      .then(() => {
        setLiked(true);
        setLikes(likes + 1);
      })
      .catch((err) => console.log(err.message));
  }

  function unlikePost() {
    axios
      .delete(`${BASE_URL}/posts/like/${id}`, config)
      .then(() => {
        setLiked(false);
        setLikes(likes - 1);
      })
      .catch((err) => console.log(err.message));
  }

  function deletePost() {
    const confirmDelete = window.confirm(
      "Tem certeza que você quer excluir este post?"
    );
    if (confirmDelete) {
      axios
        .delete(`${BASE_URL}/posts/${id}`, config)
        .then(() => {
          window.location.reload(false);
        })
        .catch(() => console.log("error"));
    }
  }

  function updatePost(form) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .put(`${BASE_URL}/posts/${id}`, form, config)
      .then(() => {
        window.location.reload(false);
      })
      .catch(() => console.log("error"));
  }

  function handleForm(e, form, setForm) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (isEditing) {
      contentEdit.current.focus();
    }
  }, [isEditing]);

  const iLiked = whoLiked?.find((i) => i.userId === user.id);
  const [liked, setLiked] = useState(iLiked);
  const [likes, setLikes] = useState(whoLiked.length);

  return (
    <PostCard>
      {user.id === userId && (
        <ButtonDiv>
          <FaTrash color="#FFFFFF" size="18px" onClick={deletePost} />
          <FaEdit
            color="#FFFFFF"
            size="18px"
            onClick={() => setEditing(!isEditing)}
          />
        </ButtonDiv>
      )}
      <Link to={`${BASE_URL}/user/${userId}`}>
        <UserImg src={picture} alt="profile" />
        <h1>{username}</h1>
      </Link>
      <LikeDiv>
        {liked ? (
          <FaHeart color="#AC0000" size="20px" onClick={() => unlikePost()} />
        ) : (
          <FaRegHeart size="20px" onClick={() => likePost()} />
        )}

        <p>{likes} likes</p>
         <AiOutlineComment color="#FFFFFF" size="20px" />
      </LikeDiv>

      {whoLiked.length > 1 ? (
        <p>
          {whoLiked[0]?.username} e outras {likes - 1} pessoas
        </p>
      ) : (
        <p>{whoLiked[0]?.username}</p>
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
    </PostCard>

  );
}
