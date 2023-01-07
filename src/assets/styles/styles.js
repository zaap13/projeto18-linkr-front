import styled from "styled-components";
import { logoFont, titleFont } from "../../constants/fonts";

export const PublicMain = styled.main`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const LogoBox = styled.div`
  display: flex;
  font-weight: 700;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: ${logoFont};
    font-size: 76px;
    line-height: 84px;
  }
  h2 {
    font-size: 23px;
    line-height: 34px;
    text-align: center;
  }

  width: 100%;
  height: 175px;
  color: #ffffff;
  background-color: #151515;

  @media (min-width: 768px) {
    width: 60%;
    height: 100vh;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 106px;
      line-height: 117px;

      letter-spacing: 0.05em;
    }
    h2 {
      font-size: 43px;
      line-height: 64px;
    }
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  height: 60%;
  padding: 20px;
  gap: 20px;

  @media (min-width: 768px) {
    margin: 0 50px;
    width: 40%;
    height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;

  input {
    width: 100%;
    height: 65px;
    background: #ffffff;
    border-radius: 6px;
  }
  button {
    width: 100%;
    height: 55px;
    background: #1877f2;
    border-radius: 5px;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    cursor: pointer;
    color: #ffffff;
    font-family: ${titleFont};
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-decoration-line: underline;

  color: #ffffff;
`;

export const CreationBox = styled.div`
  width: 100vw;
  min-height: fit-content;
  gap: 10px;
  margin: 5vh auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  padding: 10px;
  padding-left: 70px;

  background-color: #ffff;

  h1 {
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 5px;

    input {
      height: 30px;

      background: #efefef;
      border-radius: 5px;
    }
  }

  img {
    width: 50px;
    height: 50px;

    position: absolute;
    top: 10px;
    left: 10px;

    display: none;

    border-radius: 26.5px;
  }

  button {
    font-size: 13px;
    font-weight: 700;
    color: #ffff;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;

    background: #1877f2;
    border-radius: 5px;

    width: 112px;
    height: 22px;
    align-self: flex-end;
  }

  ::placeholder {
    color: #949494;

    font-size: 15px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
  @media (min-width: 768px) {
    width: 611px;

    border-radius: 16px;

    button {
      height: 31px;
    }

    img {
      display: initial;
    }
  }
`;

export const PostCard = styled.div`
  width: 100vw;
  min-height: 70px;

  margin: 2vh auto;

  padding: 10px;
  padding-left: 65px;
  background-color: #171717;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #ffff;

  img {
    width: 50px;
    height: 50px;

    position: absolute;
    top: 10px;
    left: 10px;

    background-color: #ffff;
    border-radius: 26.5px;
  }

  h1 {
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #fff;
  }

  p {
    color: #b7b7b7;
  }

  @media (min-width: 768px) {
    width: 611px;

    border-radius: 16px;

    h1 {
      font-size: 19px;
      line-height: 23px;
    }

    p {
      font-size: 17px;
      line-height: 20px;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  min-height: 100vh;
  flex-wrap: nowrap;
  flex-direction: column;
  margin-top: 72px;
`;

export const Title = styled.h2`
  font-family: ${titleFont};
  font-weight: 700;
  font-size: 33px;
  line-height: 49px;
  color: #ffffff;
  margin: 0 15%;

  @media (min-width: 768px) {
    font-size: 43px;
    line-height: 64px;
  }
`;
