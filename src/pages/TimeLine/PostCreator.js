import axios from "axios";
import { useState } from "react";
import { CreationBox } from "../../assets/styles/styles";
import { BASE_URL } from "../../constants/url";

function publishPost(event, setPublishing) {
  setPublishing(true);

  const promise = axios.post(`${BASE_URL}/posts`);
  promise.then((res) => {
    setPublishing(false);
    console.log(res.data);
  });
  promise.catch(() => {
    setPublishing(false);
    alert("Houve um erro ao publicar seu link");
  });
  event.preventDefault();
}

export default function PostCreator() {
  const [publishing, setPublishing] = useState(false);
  return (
    <CreationBox>
      <img
        src="https://st3.depositphotos.com/6962450/14134/i/600/depositphotos_141349842-stock-photo-the-emblem-of-the-sports.jpg"
        alt="vasco"
      ></img>
      <h1>What are you going to share today?</h1>
      <form onSubmit={(event) => publishPost(event, setPublishing)}>
        <input
          disabled={publishing}
          required
          type="url"
          placeholder="http://..."
        />
        <input
          disabled={publishing}
          placeholder="Awesome article about #javascript"
        />
        <button disabled={publishing} type="submit">
          {publishing ? "Publishing..." : "Publish"}
        </button>
      </form>
    </CreationBox>
  );
}
