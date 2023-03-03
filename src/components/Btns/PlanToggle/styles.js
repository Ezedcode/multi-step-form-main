import styled, { keyframes } from "styled-components";

const active = keyframes`
    from {
        left: 8%;
    }
    to {
        left: 60%;
    }
`;

const deactive = keyframes`
    from {
        left: 60%;
    }
    to {
        left: 8%;
    }
`;

const Container = styled.button`
  & {
    width: 47px;
    height: 23px;
    cursor: pointer;
    border-radius: 70px;
    margin: 0 30px;
    background: hsl(213, 96%, 18%);
  }

  & > div {
    position: relative;
    left: 8%;
    width: 13px;
    height: 13px;
    border-radius: 100%;
    animation: ${deactive} 0.5s;
    background: hsl(0, 0%, 100%);
  }

  & > div.active {
    left: 60%;
    animation: ${active} 0.5s;
  }
`;

export default Container;
