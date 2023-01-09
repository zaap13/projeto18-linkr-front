import {
  HeaderStyle,
  LogoutContainer,
  IconImageProfile,
  LogoutText,
} from "./HeaderStyle";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const userLoggedInData = JSON.parse(localStorage.getItem("linkr"));
  const navigate = useNavigate();

  return (
    <HeaderStyle>
 <h1 onClick={() => navigate("*")}>linkr</h1>
      <Search />
      <LogoutContainer>
        <IconImageProfile onClick={() => setClicked(!clicked)}>
          <GoChevronDown
            size="25px"
            color="#FFFFFF"
            display={clicked ? "none" : ""}
          />
          <GoChevronUp
            size="25px"
            color="#FFFFFF"
            display={clicked ? "" : "none"}
          />
          <img src={userLoggedInData.picture} alt="profile" />
        </IconImageProfile>
        <LogoutText
          onClick={() => localStorage.clear()}
          display={clicked ? "block" : "none"}
        >
          <a href="*">Logout</a>
        </LogoutText>
      </LogoutContainer>
    </HeaderStyle>
  );
};
