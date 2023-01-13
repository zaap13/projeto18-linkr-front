import styled from "styled-components";
import { titleFont, mainFont } from "../../constants/fonts";

const ContainerPosts = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: 100%;
`
const Gif = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
img {
    width: 80px;
}
`
const Title = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 18px;
div {
    display: flex;
    flex-direction: row;
    align-items: center;
}
img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
h1 {
    font-family: ${titleFont};
    font-weight: 700;
    font-size: 43px;
    color: #FFFFFF;
    padding: 20px;
    word-break: break-word;
}
@media (max-width: 768px) {
    h1 {
        font-size: 33px;
    }
}
button {
    font-family: ${mainFont};
    font-size: 14px;
    color: #FFFFFF;
    background-color: #1877F2;
    width: 112px;
    height: 31px;
    align-items: right;
    cursor: pointer;
};
button:disabled {
    background-color:#A9A9A9;
}
`

export { ContainerPosts, Gif, Title };