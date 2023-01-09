import { InputContainer, SearchButton, SearchContainer, SearchUserList, UserAlreadySearched } from "./HeaderStyle";
import { GoSearch } from "react-icons/go";
import { useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "./useDebounce";
import { BASE_URL } from "../../constants/url";
import { Link } from "react-router-dom";

export default function Search({value, onChange}) {
    const [usersList, setUsersList] = useState([]); //salvar aqui a lista de usuarios que vai pegar do localstorage
    const [display, setDisplay] = useState(false);
    const [usersList, setUsersList] = useState(null);

    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 3000)

    function handleChange(e) {
        setDisplayValue(e.target.value);
        debouncedChange(e.target.value);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("linkr"));
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        
        axios
          .get(`${BASE_URL}/search`, config)
          .then((res) => {
            setUsersList(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    

    return (
        <SearchContainer>
            <InputContainer>
                <input
                    type="search"
                    value={displayValue}
                    placeholder="Search for people"
                    onClick={() => setDisplay(!display)}
                    onChange={handleChange}
                />
                <SearchButton type="submit">
                    <GoSearch size="small" color="#C6C6C6" />
                </SearchButton>
            </InputContainer>
            <SearchUserList
                display={usersList.length !== 0 && display === true ? "flex" : "none"}
            >
                {usersList.map((user, index) => (
                    <UserAlreadySearched key={index} >
                        <Link to={{BASE_URL}/user/10}>
                        <img
                            src={user.picture}
                            alt="profile"
                        />
                        <p>{user.username}</p>
                        </Link>
                    </UserAlreadySearched>
                ))}
            </SearchUserList>
        </SearchContainer>
    );
};