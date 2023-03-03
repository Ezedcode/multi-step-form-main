import styled from "styled-components";

const Container = styled.div`
  & p {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  & .cards {
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  & .cardChecked {
    background: hsl(231, 100%, 99%);
    border-color: hsl(243, 100%, 62%);
  }

  & > div > div:last-child {
    height: 3rem;
    display: flex;
    border-radius: 10px;
    background: hsl(231, 100%, 99%);
    align-items: center;
    justify-content: center;
  }

  & label.checked {
    color: hsl(231, 11%, 63%);
  }

  @media (max-width: 375px) {
    & {
      flex-direction: column;
      align-items: center;
    }

    & .cards {
      margin-bottom: 20px;
      grid-template-columns: repeat(1, 1fr);
    }

    & p {
      margin-bottom: 20px;
    }
  }
`;

export default Container;
