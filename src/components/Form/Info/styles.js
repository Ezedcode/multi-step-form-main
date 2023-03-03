import styled from "styled-components";

const Container = styled.div`
  & p {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  & > div div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  & input {
    border: 1px solid hsl(231, 11%, 63%);
    margin-top: 10px;
    padding: 14px;
    border-radius: 5px;
    outline-color: hsl(243, 100%, 62%);
  }

  & input::placeholder {
    letter-spacing: 1.5px;
  }

  & > div > div > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & span {
    color: hsl(354, 84%, 57%);
  }

  & .error {
    border-color: hsl(354, 84%, 57%);
  }

  @media (width: 375px) {
    & label {
      font-size: 14px;
    }

    & p {
      margin: 0px;
    }
  }
`;

export default Container;
