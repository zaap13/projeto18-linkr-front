import styled from "styled-components";

const HeaderStyle = styled.nav`
    background-color: #151515;
    padding: 0 15px;

    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;

    h1 {
        font-size: 49px;
        font-weight: bold;
        letter-spacing: 5%;
        color: #FFFFFF;
    }
`; 

const SearchContainer = styled.div`
    margin: 0 10px;

    width: 563px;
    height: 45px;
`;

const InputContainer = styled.div` 

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    input {
        background-color: #FFFFFF;
        border-radius: 8px;
        padding-left: 15px;

        width: 100%;
        height: 100%;

        font-size: 19px;
        
        top: 0;
        left: 0;
    }

    input::placeholder {
        color: #C6C6C6;
    }
`;

const SearchButton = styled.button` 
    margin-right: 10px;

    width: 34px;
    height: 34px;

    position: absolute;
    right: 0;
`;

const SearchUserList = styled.div`
    background-color: #E7E7E7;
    border-radius: 0 0 8px 8px;
    margin-top: -10px;
    padding-top: 10px;

    display: ${(props) => props.display};
`;

const UserAlreadySearched = styled.div` 
    display: flex;
    align-items: center;
    gap: 12px;

    height: 67px;

    padding-left: 17px;

    img {
        width: 39px;
        height: 39px;

        border-radius: 50%;
    }

    p {
        font-size: 19px;
        color: #515151;
    }
`;

const LogoutContainer = styled.div` 
    img {
        width: 53px;
        height: 53px;

        border-radius: 50%;
    }
`;


export { HeaderStyle, SearchContainer, InputContainer, SearchButton, SearchUserList, UserAlreadySearched, LogoutContainer };