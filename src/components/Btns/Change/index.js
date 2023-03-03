import React, { useContext } from "react";
import GlobalVar from "../../../context/Globalvar";
import Container from "./styles";

const Change = () => {
  const { setNextStep } = useContext(GlobalVar);
  return (
    <Container onClick={() => setNextStep(0)}>
      <u>Change</u>
    </Container>
  );
};

export default Change;
