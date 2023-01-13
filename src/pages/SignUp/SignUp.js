import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import {
  PublicMain,
  Form,
  LogoBox,
  Text,
  FormBox,
} from "../../assets/styles/styles";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${BASE_URL}/sign-up`, {
        email,
        password,
        username,
        picture,
      })
      .then(() => {
        setLoading(false);
        navigate("/sign-in");
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false);
      });
  }

  return (
    <PublicMain>
      <LogoBox>
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </LogoBox>
      <FormBox>
        <Form onSubmit={handleSignUp}>
          <input
            disabled={loading}
            type="email"
            placeholder="e-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            disabled={loading}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            disabled={loading}
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            disabled={loading}
            type="text"
            placeholder="picture url"
            onChange={(e) => setPicture(e.target.value)}
            required
          />
          <button disabled={loading} type="submit">
            Sign Up
          </button>
        </Form>
        <Link to={`/`}>
          <Text>Switch back to log in</Text>
        </Link>
      </FormBox>
    </PublicMain>
  );
}
