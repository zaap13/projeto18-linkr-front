import {
  ButtonDiv,
  LikeDiv,
  PostCard,
  Repost,
  UrlBox,
  UrlImg,
  UserImg,
} from "../assets/styles/styles";
import { ReactTagify } from "react-tagify";

import { AiOutlineComment } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { BiRepost } from "react-icons/bi";

import { FaHeart, FaRegHeart, FaTrash, FaEdit } from "react-icons/fa";

import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { SearchButton } from "./Header/HeaderStyle";
import {
  CommentContainer,
  CommentContent,
  CommentContentTitle,
  CommentsStyle,
  ContainerToComment,
  EditInput,
  InputContainerToComment,
} from "./CommentsStyle";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import ReactDOMServer from "react-dom/server";

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
    comments,
    repostUserId,
    repostUsername,
    repostCount,
  } = post;
  const contentEdit = useRef(null);
  const [isEditing, setEditing] = useState(false);
  const [form, setForm] = useState({ content: "" });
  const [contentPost, setContentPost] = useState("");
  const iLiked = whoLiked?.find((i) => i.userId === user.id);
  const [liked, setLiked] = useState(iLiked);
  const [likes, setLikes] = useState(whoLiked.length);
  const [loading, setLoading] = useState(false);

  console.log(post)
  console.log(comments[0]?.comment);
  console.log(comments[0]?.username);
  comments?.forEach(element => {
    console.log(element)
  });

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  function likePost() {
    setLoading(true);
    axios
      .post(`${BASE_URL}/posts/like/${id}`, {}, config)
      .then(() => {
        setLiked(true);
        setLikes(likes + 1);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }

  function sharePost() {
    setLoading(true);

    axios
      .post(`${BASE_URL}/posts/share/${id}`, {}, config)
      .then(() => {
        navigate("*");
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }

  function unlikePost() {
    setLoading(true);

    axios
      .delete(`${BASE_URL}/posts/like/${id}`, config)
      .then(() => {
        setLiked(false);
        setLikes(likes - 1);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }

  function deletePost() {
    setLoading(true);

    const confirmDelete = window.confirm(
      "Tem certeza que você quer excluir este post?"
    );
    if (confirmDelete) {
      axios
        .delete(`${BASE_URL}/posts/${id}`, config)
        .then(() => {
          navigate("*");
          setLoading(false);
        })
        .catch(() => console.log("error"));
    } else {
      setLoading(false);
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
        navigate("*");
      })
      .catch(() => console.log("error"));
  }

  function commentPostForm(event) {
    event.preventDefault();

    const body = {
      content: contentPost,
      userId: user.id
    };

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .post(`${BASE_URL}/comments/${id}`, body, config)
      .then(() => {
        navigate("*");
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

  return (
    <>
      {repostUserId && (
        <Repost>
          <BiRepost color="#FFFFFF" size="15px" />
          {repostUserId === user.id ? (
            <spam>Re-posted by you</spam>
          ) : (
            <spam>Re-posted by {repostUsername}</spam>
          )}
        </Repost>
      )}
      <PostCard>
        {user.id === userId && (
          <ButtonDiv>
            <button onClick={() => setEditing(!isEditing)} disabled={loading}>
              <FaEdit color="#FFFFFF" size="17px" />
            </button>
            <button onClick={deletePost} disabled={loading}>
              <FaTrash color="#FFFFFF" size="17px" />
            </button>
          </ButtonDiv>
        )}

        <LikeDiv>
          <Link to={`/user/${userId}`}>
            <UserImg src={picture} alt="profile" />
            <h1>{username}</h1>
          </Link>
          {liked ? (
            <button
              id={id}
              data-tooltip-html={ReactDOMServer.renderToString(
                <>
                  {whoLiked.length > 1 ? (
                    <p>Você e outras {likes - 1} pessoas</p>
                  ) : (
                    <p>Você</p>
                  )}
                </>
              )}
              onClick={() => unlikePost()}
              disabled={loading}
            >
              <FaHeart color="#AC0000" size="25px" />
            </button>
          ) : (
            <button
              id={id}
              data-tooltip-html={ReactDOMServer.renderToString(
                <>
                  {whoLiked.length > 1 ? (
                    <p>
                      {whoLiked[0]?.username} e outras {likes - 1} pessoas
                    </p>
                  ) : (
                    <p>{whoLiked[0]?.username}</p>
                  )}
                </>
              )}
              onClick={() => likePost()}
              disabled={loading}
            >
              <FaRegHeart size="25px" color="#fff" />
            </button>
          )}
          <Tooltip anchorId={id} />
          <p>{likes} likes</p>
          <AiOutlineComment color="#FFFFFF" size="25px" />
          <p> {comments.length} comments</p>
          <button disabled={loading} onClick={() => sharePost()}>
            <BiRepost color="#FFFFFF" size="25px" />
          </button>

          <p> {repostCount} reposts</p>
        </LikeDiv>

        {content && (
          <>
            {isEditing ? (
              <form onSubmit={() => updatePost(form)}>
                <EditInput
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
        {comments?.map((comment, index) => (
          <CommentContainer key={index}>
            <img
              src="https://br.mundo.com/fotos/201508/desenhos-2-600x559.jpg"
              alt="who comment"
            />
            <CommentContent>
              <CommentContentTitle>
                <h1>{comment.username}</h1>
                <span> * following/ * post's author ou não</span>
              </CommentContentTitle>
              <p>{comment.comment}</p>
            </CommentContent>
          </CommentContainer>
        ))}

        <ContainerToComment>
          <img
            src={user.picture}
            alt="profile"
          />
          <InputContainerToComment onSubmit={commentPostForm}>
            <input 
              type="text" 
              value={contentPost}
              onChange={(e) => setContentPost(e.target.value)}
              placeholder="Write a comment..." 
            />
            <SearchButton type="submit">
              <TbBrandTelegram size="20px" color="#C6C6C6" />
            </SearchButton>
          </InputContainerToComment>
        </ContainerToComment>
      </CommentsStyle>
    </>
  );
}
