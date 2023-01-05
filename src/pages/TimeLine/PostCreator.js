import axios from "axios";
import { useState } from "react";
import { CreationBox } from "../../assets/styles/styles";
import { BASE_URL } from "../../constants/url";

function publishPost(event, setPublishing, setForm, getPosts, setList) {
  setPublishing(true);

  const promise = axios.post(`${BASE_URL}/posts`);
  promise.then((res) => {
    setPublishing(false);
    setForm({ url: "", text: "" });
    getPosts(setList);
  });
  promise.catch(() => {
    setPublishing(false);
    alert("Houve um erro ao publicar seu link");
  });
  event.preventDefault();
}

function handleForm(e, form, setForm) {
  setForm({ ...form, [e.target.name]: e.target.value });
}
export default function PostCreator({ getPosts, setList }) {
  const [publishing, setPublishing] = useState(false);
  const [form, setForm] = useState({ url: "", text: "" });
  return (
    <CreationBox>
      <img
        src="https://st3.depositphotos.com/6962450/14134/i/600/depositphotos_141349842-stock-photo-the-emblem-of-the-sports.jpg"
        alt="vasco"
      ></img>
      <h1>What are you going to share today?</h1>
      <form
        onSubmit={(event) =>
          publishPost(event, setPublishing, setForm, getPosts, setList)
        }
      >
        <input
          value={form.url}
          onChange={(e) => handleForm(e, form, setForm)}
          name="url"
          disabled={publishing}
          required
          type="url"
          placeholder="http://..."
        />
        <input
          onChange={(e) => handleForm(e, form, setForm)}
          name="text"
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
