import styled from "styled-components";

const Container = styled.button`
    & {
        align-self: end;
        color: hsl(0, 0%, 100%);
        border: none;
        cursor: pointer;
        padding: 10px 0; 
        width: 108px;
        border-radius: 5px;
        transition: .5s;
        background: ${(props)=>!props.change? "hsl(213, 96%, 18%)":"hsl(243, 100%, 62%)"};
    }

    &:hover {
        background: hsl(213, 96%, 18%, .7);
    }
`;

export default Container;