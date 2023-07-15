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
  align-items: flex-start;
  min-width: 840px;
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
`;

export const InputTitle = styled.input`
  border-radius: 4px;
  position: relative;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(83, 79, 99);
  font-family: "Aspira Webfont", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  color: rgb(48, 44, 65);
  width: 100%;
  line-height: 1.3;
  padding: 1rem calc(1rem - 2px) 0.813rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  height: 3rem;
  text-overflow: ellipsis;
  background-color: rgb(255, 255, 255);
  margin-bottom: 1rem;

  &:hover,
  &:focus-visible {
    border-width: 1px;
    border-color: rgb(48, 44, 65);
    outline: 1px solid rgb(48, 44, 65);
  }
`;

export const TextArea = styled.textarea`
  border-radius: 4px;
  position: relative;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(83, 79, 99);
  font-family: "Aspira Webfont", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  color: rgb(48, 44, 65);
  width: 100%;
  height: 200px;
  line-height: 1.3;
  padding: 1rem calc(1rem - 2px) 0.813rem 1rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-overflow: ellipsis;

  &:hover,
  &:focus-visible {
    border-width: 1px;
    border-color: rgb(48, 44, 65);
    outline: 1px solid rgb(48, 44, 65);
  }
`;

export const Button = styled.button`
  -webkit-box-align: center;
  align-items: center;
  border-radius: 2rem;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-family: "Aspira Webfont", Helvetica, Arial, sans-serif;
  border: 0px;
  width: auto;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0.5rem 1.375rem 0.375rem;
  line-height: 1.3;
  letter-spacing: 0.25px;
  margin: 0px;
  overflow: visible;
  text-transform: none;
  appearance: button;
  cursor: pointer;

  background: linear-gradient(
    107.34deg,
    rgb(230, 87, 0) 0%,
    rgb(235, 113, 0) 51.33%
  );
  color: rgb(255, 255, 255);

  &:hover {
    transition: transform 200ms cubic-bezier(0.25, 0.1, 0.25, 1) 0ms;
    transform: scale(1.05);
    background: rgb(209, 91, 0);
    cursor: pointer;
  }
`;

export const ButtonLink = styled.button<{ align?: "left" | "right" }>`
  position: fixed;
  bottom: 120px;

  ${({ align }) => (align === "left" ? `left: 20px` : `right: 20px`)};
  -webkit-box-align: center;
  align-items: center;
  border-radius: 2rem;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-family: "Aspira Webfont", Helvetica, Arial, sans-serif;
  border: 0px;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0.5rem 1.375rem 0.375rem;
  line-height: 1.3;
  letter-spacing: 0.25px;
  margin: 0px;
  overflow: visible;
  text-transform: none;
  appearance: button;
  cursor: pointer;
  text-decoration: none;
  appearance: none;
  background: transparent;
  color: rgb(71, 39, 195);

  &:hover,
  &:active {
    background: rgb(226, 223, 255);
    color: rgb(71, 39, 195);
    cursor: pointer;
  }
`;

export const CardsContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const CardContainer = styled.li`
  position: relative;
  font-family: "Aspira Webfont", Helvetica, Arial, sans-serif;
  box-shadow: rgba(13, 13, 15, 0.3) 0px 1px 2px 0px,
    rgba(13, 13, 15, 0.15) 0px 1px 3px 1px;
  border-radius: 8px;
  width: 300px;
  min-width: 264px;
  text-align: center;
  color: rgb(48, 44, 65);
  text-align: left;
  cursor: pointer;
  background: whitesmoke;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .details {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 1rem 1.25rem;
    /* border-top: 0.0625rem solid rgb(236, 236, 236); */

    svg {
      height: 3.5rem;
      width: 3.5rem;
      min-height: 2rem;
      min-width: 2rem;
      padding: 2px;
      box-sizing: border-box;
      overflow: visible;
    }
  }

  .card-title {
    margin-left: 0.5rem;
    overflow: hidden;

    h2 {
      position: relative;
      margin: 0px;
      font-family: "Aspira Webfont", Helvetica, Arial, sans-serif;
      font-size: 0.875rem;
      font-weight: bold;
      line-height: 1.3;
      letter-spacing: 0.25px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: capitalize;
    }

    .description {
      position: relative;
      margin: 0px;
      font-family: "Aspira Webfont", Helvetica, Arial, sans-serif;
      font-size: 0.75rem;
      font-weight: normal;
      line-height: 1.3;
      letter-spacing: 0.35px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &.active {
    background-color: #242035;
    color: white;
    svg {
      fill: white;
    }
  }

  &:hover {
    background-color: #cac8d1;
    color: rgb(48, 44, 65);
    svg {
      fill: initial;
      transform: rotate(180deg);
    }
  }
`;

export const PlayListContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: #2196f3;
  grid-gap: 1rem;
`;

export const Player = styled.div`
  background-color: #534f63;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-transform: capitalize;

  audio {
    width: 100%;
    padding: 1.5rem;
    padding-bottom: 0.5rem;
  }
  p {
    margin: 0;
    font-style: oblique;
    &::before {
      content: "playing: ";
    }
  }
`;
