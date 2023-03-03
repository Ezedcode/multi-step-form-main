import React from "react";
import { useContext } from "react";
import GlobalVar from "../../../context/Globalvar";
import Container from "./styles";

const Backtbtn = () => {
  const { nextStep, setNextStep } = useContext(GlobalVar);

  const next = () => {
    setNextStep(nextStep - 1);
  };

  return <Container onClick={next}>Go Back</Container>;
};

export default Backtbtn;
