import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  margin: 0 0 1rem;
  line-height: 1.15;
  font-size: 3.6rem;
`;

export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`;

export const Form = styled.div`
  width: 100%;

  .text-box-container {
    margin-bottom: 20px;
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 200px;
  }
`;
