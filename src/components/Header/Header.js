import {
  HeaderStyle,
  InputContainer,
  LogoutContainer,
  SearchButton,
  SearchContainer,
  SearchUserList,
  UserAlreadySearched,
} from "./HeaderStyle";
import { GoSearch } from "react-icons/go";
import { useState } from "react";

export default function Header() {
  const [usersList, setUsersList] = useState([]); //salvar aqui a lista de usuarios que vai pegar do localstorage
  const [display, setDisplay] = useState(false);

  return (
    <HeaderStyle>
      <h1>linkr</h1>
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
          <UserAlreadySearched>
            <img
              src="https://a-static.mlcdn.com.br/800x560/carrinho-brinquedo-vermelho-racer-55-mk206-dismat-dismat-brinquedos/emporiocasa/921943/988c845844f9d8c11c4b14cc7aaff15c.jpg"
              alt="profile"
            />
            <p>Nome da pessoa</p>
          </UserAlreadySearched>
        </SearchUserList>
      </SearchContainer>
      <LogoutContainer onClick={() => localStorage.clear()}>
        <a href="*">
          <ion-icon name="chevron-down"></ion-icon>
          <ion-icon name="chevron-up">
            <a href="*">Logout</a>
          </ion-icon>
        </a>
        <img
          src="https://a-static.mlcdn.com.br/800x560/carrinho-brinquedo-vermelho-racer-55-mk206-dismat-dismat-brinquedos/emporiocasa/921943/988c845844f9d8c11c4b14cc7aaff15c.jpg"
          alt="profile"
        />
      </LogoutContainer>
    </HeaderStyle>
  );
}
