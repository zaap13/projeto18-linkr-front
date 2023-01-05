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

    img:nth-child(2) {
        width: 51px;
        height: 51px;

        border-radius: 50%;
    }
`; 

const SearchContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    padding-left: 15px;

    width: 563px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export { HeaderStyle, SearchContainer };