import styled from "styled-components";
import { logoFont, titleFont } from "../../constants/fonts";

export const PublicMain = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    flex-direction: row;
  }
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
    height: 100%;
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


export const CreationBox=styled.div`
  
`