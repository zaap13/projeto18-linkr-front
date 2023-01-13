import styled from "styled-components";

export const EditInput = styled.input`
    background-color: #FFFFFF;
    border-radius: 7px;

    width: 100%;

    font-size: 14px;
    color: #4C4C4C;

    ::placeholder {
        padding-left: 5px;

        font-size: 14px;
        font-style: italic;
        color: #575757;
    }
`;

export const CommentsStyle = styled.div`
    background-color: #1E1E1E;
    border-radius: 0 0 16px 16px;
    margin: -12px 0 40px 0;
    padding-top: 12px;

    width: 611px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const CommentContainer = styled.div`
    padding: 16px 0 16px 17px;
    border-bottom: 1px solid #353535;

    display: flex;
    gap: 18px;

    img {
        border-radius: 50%;

        width: 39px;
        height: 39px;
    }
`;

export const CommentContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    p {
        font-size: 14px;
        color: #ACACAC;
    }
`;

export const CommentContentTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    h1 {
        font-size: 17px;
        font-weight: 900;
        color: #F3F3F3;
    }

    span {
        font-size: 16px;
        color: #565656;
    }
`;

export const ContainerToComment = styled.div`
    padding: 16px 17px 16px 17px;

    display: flex;
    align-items: center;
    gap: 18px;

    img {
        border-radius: 50%;

        width: 39px;
        height: 39px;
    }
`;

export const InputContainerToComment = styled.form`
    width: 100%;
    height: 39px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    input {
        background-color: #252525;
        border-radius: 8px;
        padding-left: 15px;

        width: 100%;
        height: 100%;

        font-size: 19px;

        top: 0;
        left: 0;
    }

    input::placeholder {
        font-size: 14px;
        font-style: italic;
        color: #575757;
    }
`;