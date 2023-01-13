import styled from "styled-components";
import { titleFont } from "../../constants/fonts";

const ContainerPosts = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
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
    margin-bottom: 18px;
img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 5px;
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
`

export { ContainerPosts, Gif, Title };