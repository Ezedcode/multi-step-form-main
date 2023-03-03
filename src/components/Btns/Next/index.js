import React from "react";
import { useContext } from "react";
import GlobalVar from "../../../context/Globalvar";
import Container from "./styles";

const Nextbtn = () => {
  const { nextStep, click, setClick, setNextStep } = useContext(GlobalVar);

  const next = () => {
    setClick(true);
    console.log(click);
    if (nextStep > 0) {
      setNextStep(nextStep + 1);
    }
  };

  return (
    <Container onClick={next} change={nextStep === 3 ? true : false}>
      {nextStep === 3 ? "Confirm" : "Next Step"}
    </Container>
  );
};

export default Nextbtn;
