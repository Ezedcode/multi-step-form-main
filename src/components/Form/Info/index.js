import React, { useContext, useEffect, useState } from "react";
import GlobalVar from "../../../context/Globalvar";
import Input from "./Input";
import Container from "./styles";

const Info = () => {
  const [control1, setControl1] = useState(true);
  const [control2, setControl2] = useState(true);
  const [control3, setControl3] = useState(true);
  const { click, setClick, nextStep, setNextStep } = useContext(GlobalVar);

  useEffect(() => {
    if (click) {
      if (control1 || control2 || control3) {
        setClick(false);
      } else if (!control1 && !control2 && !control3) {
        setNextStep(nextStep + 1);
        setClick(false);
      }
    }
  }, [click, control1, control2, control3, nextStep, setNextStep, setClick]);

  return (
    <Container>
      <div className="container">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <Input
          name={"Name"}
          type={"txt"}
          forName={"name"}
          placeholder={"e.g.Stephen King"}
          control={control1}
          setControl={setControl1}
        />
        <Input
          name={"Email Address"}
          type={"email"}
          forName={"email"}
          placeholder={"e.g.steohenking@gmail.com"}
          control={control2}
          setControl={setControl2}
        />
        <Input
          name={"Phone Number"}
          type={"tel"}
          forName={"phone"}
          placeholder={"e.g.+1 234 567 890"}
          control={control3}
          setControl={setControl3}
        />
      </div>
    </Container>
  );
};

export default Info;
