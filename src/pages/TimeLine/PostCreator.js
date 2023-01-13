import axios from "axios";
import { useState } from "react";
import { CreationBox } from "../../assets/styles/styles";
import { BASE_URL } from "../../constants/url";

export default function PostCreator({ getPosts, setList }) {
  const [publishing, setPublishing] = useState(false);
  const [form, setForm] = useState({ url: "", content: "" });
  const user = JSON.parse(localStorage.getItem("linkr"));

  function publishPost(event, setPublishing, setForm, getPosts, setList, form) {
    setPublishing(true);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const promise = axios.post(`${BASE_URL}/posts`, form, config);
    promise.then((res) => {
      setPublishing(false);
      setForm({ url: "", content: "" });
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

  return (
    <CreationBox>
      <img src={user.picture} alt="Avatar"></img>
      <h1>What are you going to share today?</h1>
      <form
        onSubmit={(event) =>
          publishPost(event, setPublishing, setForm, getPosts, setList, form)
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
          name="content"
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
