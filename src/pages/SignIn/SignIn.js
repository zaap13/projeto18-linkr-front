import { Link } from "react-router-dom";
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

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${BASE_URL}/`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("linkr", JSON.stringify(res.data));
        window.location.reload(false);
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
        <Form onSubmit={handleSignIn}>
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
          <button type="submit" disabled={loading}>
            Log In
          </button>
        </Form>
        <Link to={`/sign-up`}>
          <Text>First time? Create an account!</Text>
        </Link>
      </FormBox>
    </PublicMain>
  );
}
