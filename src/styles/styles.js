import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from{
    opacity: 0;
    top: -50%;
  }to{
    top: 0; 
    opacity: 1;
  }
`;

const animation2 = keyframes`
  from{
    opacity: 0;
    top: -150px;
  }to{
    top: -73; 
    opacity: 1;
  }
`;

const Container = styled.div`
  & {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: hsl(217, 100%, 97%);
  }

  & > div {
    width: 900px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: hsl(0, 0%, 100%);
    box-shadow: 1px 10px 30px hsl(229, 24%, 87%);
  }

  & > div > div:last-child {
    width: 72%;
    ${(props) => (props.buttons ? "" : "height: 490px;")}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  & > div > div:last-child > div {
    width: 75%;
  }

  & > div > div:last-child > div:first-child {
    position: relative;
    animation: ${animation} 0.8s linear;
  }

  & .buttons {
    display: ${(props) => (props.buttons ? "none" : "flex")};
    justify-content: center;
  }

  & .buttons > div{
    width: 100%;
    display: flex;
    justify-content: ${(props) => (props.backBtn ? "end" : "space-between")};
  }

  & .buttons button:first-child {
    display: ${(props) => (props.backBtn ? "none" : "block")};
  }

  @media (max-width: 375px) {
    & {
      width: 100%;
      height: 100%;
    }

    & > div {
      background: hsl(217, 100%, 97%);
      flex-direction: column;
    }

    & > div > div:last-child {
      height: 0;
    }

   & > div  > div:last-child > div {
    width: 100vw;
    background: hsl(0, 0%, 100%);
  }


  & > div  > div:last-child > div:first-child {
    top: -73px;
    width: 87vw;
    ${(props) => (props.buttons ? "" : "padding: 20px 0;")}
    display: flex;
    justify-content:center;
    border-radius: 10px;
    animation: ${animation2} 0.8s linear;
    box-shadow: 0px 6px 63px -20px hsl(229, 24%, 87%);
  }

  & .container {
    height: 100%;
    width: 90%;
  }

  & input {
    width: 96%;
    padding: 10px 0;
    padding-left: 10px;
  }
  

  & .buttons > div{
    width: 87vw;
    padding: 20px  0;
    align-self: end;
  }
`;

export default Container;
