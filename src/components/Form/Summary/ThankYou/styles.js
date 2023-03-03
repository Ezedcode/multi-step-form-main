import styled from "styled-components";

const Container = styled.div`
  & {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & h1 {
    margin: 20px 0;
  }

  & > div {
    width: 430px;
    text-align: center;
  }

  @media (width: 375px) {
    & {
      padding: 5rem 0;
    }

    & svg {
      height: 55px;
    }
  }
`;

export default Container;
