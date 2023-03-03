import { useState } from "react";
import Backtbtn from "./components/Btns/Back";
import Nextbtn from "./components/Btns/Next";
import AddOns from "./components/Form/AddOns";
import Info from "./components/Form/Info";
import Plan from "./components/Form/Plan";
import FinishingUp from "./components/Form/Summary/FinishingUp";
import ThankYou from "./components/Form/Summary/ThankYou";
import SideBar from "./components/SideBar";
import GlobalVar from "./context/Globalvar";
import Global from "./styles/GlobalStyles";
import Container from "./styles/styles";

const App = () => {
  const [nextStep, setNextStep] = useState(0);
  const [click, setClick] = useState(false);
  const [typePlan, setTypePlan] = useState([0, 0]);
  const [checkBox, setcheckBox] = useState([false, false, false]);

  const section = [
    <Info />,
    <Plan />,
    <AddOns />,
    <FinishingUp />,
    <ThankYou />,
  ];

  return (
    <GlobalVar.Provider
      value={{
        nextStep,
        setNextStep,
        click,
        setClick,
        typePlan,
        setTypePlan,
        checkBox,
        setcheckBox,
      }}
    >
      <Container
        buttons={nextStep === section.length - 1 && true}
        backBtn={nextStep === 0 && true}
      >
        <div>
          <SideBar />
          <div>
            {section[nextStep]}
            <div className="buttons">
              <div>
                <Backtbtn />
                <Nextbtn />
              </div>
            </div>
          </div>
        </div>
        <Global />
      </Container>
    </GlobalVar.Provider>
  );
};

export default App;
