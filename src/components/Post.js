import {
  ButtonDiv,
  LikeDiv,
  PostCard,
  UrlBox,
  UrlImg,
  UserImg,
} from "../assets/styles/styles";
import { ReactTagify } from "react-tagify";
import { FaHeart, FaRegHeart, FaTrash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import { useState } from "react";

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

  const iLiked = whoLiked?.find((i) => i.userId === user.id);
  const [liked, setLiked] = useState(iLiked);
  const [likes, setLikes] = useState(whoLiked.length);

  return (
    <PostCard>

      {user.id === userId && (
        <ButtonDiv>
          <FaTrash color="#FFFFFF" size="14px" onClick={deletePost} />
          <FaEdit color="#FFFFFF" size="18px" onClick={() => setEditing(!isEditing)} />
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
    </PostCard>
  );
}
