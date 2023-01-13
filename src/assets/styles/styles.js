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

export const UrlBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  padding: 10px;
  padding-right: 155px;
  gap: 5px;

  border: 1px solid #4d4d4d;
  border-radius: 11px;

  font-size: 11px;
  line-height: 13px;
  font-weight: 400;
  color: #cecece;
  h2 {
    font-size: 16px;
    line-height: 19px;
  }
  p {
    color: #9b9595;
  }

  h3 {
    color: #cecece;
  }

  @media (min-width: 768px) {
    width: 82%;
    height: 42%;
  }
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
  width: 100%;
  min-height: 200px;

  padding: 10px;
  padding-left: 65px;
  background-color: #171717;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #ffff;

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
  }
`;

export const Main = styled.main`
  display: flex;
  min-height: 100vh;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: ${titleFont};
  font-weight: 700;
  font-size: 33px;
  line-height: 49px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 43px;
    line-height: 64px;
  }
`;

export const TrendingStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 301px;
  height: fit-content;

  background: #171717;
  border-radius: 16px;
  font-weight: 700;
  color: #ffffff;
  gap: 5px;
  margin: 85px 20px;

  div {
    height: 40px;
    border-bottom: 1px solid #484848;

    h2 {
      font-family: ${titleFont};
      font-size: 27px;
      line-height: 40px;
      margin-left: 10px;
    }
  }

  h3 {
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 72px;
  align-items: flex-start;
  justify-content: center;
`;

export const UrlImg = styled.img`
  width: 34%;
  height: 100%;
  border-radius: 0px 12px 13px 0px;
  position: absolute;
  right: 0;
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 10px;
  left: 10px;

  background-color: #ffff;
  border-radius: 26.5px;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
`;

export const LikeDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 50px;
  align-items: center;
  justify-content: center;
  top: 80px;
  left: 10px;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  cursor: pointer;

  color: #ffffff;
`;
