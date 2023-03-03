import styled from "styled-components";

const Container = styled.div`
  & svg {
    margin-bottom: 3rem;
  }

  & div {
    display: flex;
    flex-direction: column;
  }

  & > div {
    height: 100%;
    padding: 10px 0;
    padding-left: 10px;
    cursor: pointer;
    justify-content: space-around;
    border-radius: 10px;
    transition: 0.5s;
    border: 1px solid hsl(231, 11%, 63%);
  }

  & > div:hover {
    border-color: hsl(243, 100%, 62%);
  }

  & span {
    font-weight: 400;
  }

  & .value {
    color: hsl(231, 11%, 63%);
  }

  @media (max-width: 375px) {
    & {
      margin-bottom: 20px;
    }

    & > div {
      flex-direction: row;
      justify-content: start;
      align-items: center;
    }

    & svg {
      margin-bottom: 0rem;
      margin-right: 20px;
    }
  }
`;

export default Container;
