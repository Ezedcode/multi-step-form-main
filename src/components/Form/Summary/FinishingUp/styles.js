import styled from "styled-components";

const Container = styled.div`
  & .first {
    border-radius: 8px;
    background: hsl(231, 100%, 99%);
    padding: 0.2rem 1.3rem;
  }

  & > div > p {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  & .principalArea,
  & .total {
    margin: 1rem 0;
  }

  & > div > div p {
    font-size: 14.5px;
  }

  & hr {
    border-bottom: 1px solid hsl(231, 11%, 63%);
  }

  & .total,
  & > div > div div div,
  & .typePlan {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .typePlan > div:first-child {
    align-items: start;
    flex-direction: column;
  }

  & .services span {
    font-weight: 440;
    font-size: 15px;
  }

  & .total {
    padding: 0 1.3rem;
  }

  & .total > span:last-child {
    font-size: 24px;
    color: hsl(243, 100%, 62%);
  }

  @media (width: 375px) {
    & > div > p {
      margin-bottom: 10px;
    }

    & .services span {
      font-size: 13px;
    }

    & .total > span:last-child {
      font-size: 17px;
      padding: 0;
    }
  }
`;

export default Container;
