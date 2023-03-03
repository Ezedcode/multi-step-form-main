import styled from "styled-components";

const Container = styled.button`
    & {
        align-self: end;
        border: none;
        cursor: pointer;
        transition: .5s;
        background: none;
        padding: 10px 20px;
        color: hsl(231, 11%, 63%);
    }

    &:hover {
        color: hsl(213, 96%, 18%);
    }
`;

export default Container;