import {
  HeaderStyle,
  InputContainer,
  LogoutContainer,
  SearchButton,
  SearchContainer,
  SearchUserList,
  UserAlreadySearched,
  IconImageProfile,
  LogoutText,
} from "./HeaderStyle";
import { GoSearch, GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [usersList, setUsersList] = useState([]); //salvar aqui a lista de usuarios que vai pegar do localstorage
  const [display, setDisplay] = useState(false);
  const [clicked, setClicked] = useState(false);
  const userLoggedInData = JSON.parse(localStorage.getItem("linkr"));
  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <h1 onClick={() => navigate("*")}>linkr</h1>
      <SearchContainer>
        <InputContainer>
          <input
            type="text"
            placeholder="Search for people"
            onClick={() => setDisplay(!display)}
          />
          <SearchButton type="submit">
            <GoSearch size="small" color="#C6C6C6" />
          </SearchButton>
        </InputContainer>
        <SearchUserList
          display={usersList.length !== 0 && display === true ? "flex" : "none"}
        >
          {usersList.map((user, index) => (
            <UserAlreadySearched key={index}>
              <img src={user.picture} alt="profile" />
              <p>{user.username}</p>
            </UserAlreadySearched>
          ))}
        </SearchUserList>
      </SearchContainer>
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
}
