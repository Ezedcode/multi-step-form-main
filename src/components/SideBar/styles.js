import styled from "styled-components";

const Container = styled.div`
  & {
    position: relative;
    height: 568px;
    padding: 10px 0 10px 10px;
  }

  & .steps {
    position: absolute;
  }

  & img:first-child {
    display: none;
  }

  @media (max-width: 375px) {
    & {
      height: 172px;
      width: 100%;
      padding: 0;
    }

    & .steps {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    & .steps div div {
      display: none;
    }

    & .steps div {
      height: 33px;
      margin: 20px 10px;
    }

    & .steps div > span {
      height: 33px;
      width: 33px;
      margin: 0px;
    }

    & img:first-child {
      display: block;
    }

    & img:last-child {
      display: none;
    }
  }
`;

export default Container;
