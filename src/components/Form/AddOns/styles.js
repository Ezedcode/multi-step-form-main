import styled from "styled-components";

const Container = styled.div`
  & > div > p {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  & div > div > div:nth-child(2) {
    margin: 20px 0;
  }

  @media (width: 375px) {
    & > div > p {
      margin-bottom: 20px;
    }
  }
`;

export default Container;
