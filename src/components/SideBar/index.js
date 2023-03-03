import React, { useContext } from "react";
import SidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import GlobalVar from "../../context/Globalvar";
import Step from "./Step";
import Container from "./styles";
import SidebarMobile from "../../assets/images/bg-sidebar-mobile.svg";

const SideBar = () => {
  const { nextStep } = useContext(GlobalVar);

  return (
    <Container>
      <div className="steps">
        <Step step={1} name={"YOUR INFO"} active={nextStep === 0 && true} />
        <Step step={2} name={"SELECT PLAN"} active={nextStep === 1 && true} />
        <Step step={3} name={"ADD-ONS"} active={nextStep === 2 && true} />
        <Step step={4} name={"SUMMARY"} active={nextStep >= 3 && true} />
      </div>
      <div>
        <img src={SidebarMobile} alt="mobile-sidebar" />
        <img src={SidebarDesktop} alt="desktop-sidebar" />
      </div>
    </Container>
  );
};

export default SideBar;
