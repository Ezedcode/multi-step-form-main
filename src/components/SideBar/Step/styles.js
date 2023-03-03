import styled from "styled-components";

const Container = styled.div`
  & {
    height: 50px;
    margin-top: 1.5rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
  }

  & > span {
    height: 40px;
    width: 40px;
    margin-right: 20px;
    color: ${(props) =>
      !props.active ? "hsl(0, 0%, 100%)" : "hsl(213, 96%, 18%)"};
    background: ${(props) =>
      !props.active ? "hsl(243, 100%, 62%)" : "hsl(206, 94%, 87%)"};
    border-radius: 100%;
    border: ${(props) =>
      !props.active ? "1px solid hsl(229, 24%, 87%)" : "none"};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & div > span:first-child {
    font-weight: 400;
    color: hsl(229, 24%, 87%);
  }

  & div > span:last-child {
    color: hsl(0, 0%, 100%);
  }
`;

export default Container;
