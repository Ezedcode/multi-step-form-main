import styled from "styled-components";

const Container = styled.div`
  & {
    height: 4.5rem;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    border: 1px solid hsl(231, 11%, 63%);
  }

  & > div,
  & > div > div:first-child,
  & .checkBox {
    display: flex;
    align-items: center;
  }

  & > div {
    width: 90%;
    justify-content: space-between;
  }

  &:hover {
    border-color: hsl(243, 100%, 62%);
  }

  &.checked {
    background: hsl(231, 100%, 99%);
    border-color: hsl(243, 100%, 62%);
  }

  & > div > div:last-child {
    color: hsl(243, 100%, 62%);
  }

  & .checkBox {
    margin-right: 1rem;
    height: 20px;
    width: 20px;
    border-radius: 5px;
    justify-content: center;
    border: 1px solid hsl(231, 11%, 63%);
  }

  &.checked .checkBox {
    background: hsl(243, 100%, 62%);
    border-color: hsl(243, 100%, 62%);
  }

  @media (width: 375px) {
    & p {
      font-size: 12px;
    }

    & > div > div:last-child {
      font-size: 13px;
    }
  }
`;

export default Container;
