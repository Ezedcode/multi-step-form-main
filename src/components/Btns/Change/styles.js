import styled from "styled-components";

const Container = styled.button`
  & {
    height: 14px;
    margin-top: 5px;
    background: none;
    font-weight: 400;
    color: hsl(231, 11%, 63%);
    cursor: pointer;
  }

  &:hover {
    color: hsl(243, 100%, 62%);
  }
`;

export default Container;
