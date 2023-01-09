import styled from "styled-components";
import { titleFont } from "../../constants/fonts";

const ContainerPosts = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 70%;
@media (max-width: 768px) {
    width: 100%;
}
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
img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 20px;
}
h1 {
    font-family: ${titleFont};
    font-weight: 700;
    font-size: 50px;
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