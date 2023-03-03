import React, { useContext, useEffect, useState } from "react";
import Advanced from "../../../assets/images/Advanced";
import Arcade from "../../../assets/images/Arcade";
import Pro from "../../../assets/images/Pro";
import GlobalVar from "../../../context/Globalvar";
import PlanToggle from "../../Btns/PlanToggle";
import Card from "./Card";
import Container from "./styles";
import content from "../../../content/plan.json";

const Plan = () => {
  const [plan, setPlan] = useState(false);
  const [selectPlan, setSelectPlan] = useState(0);
  const { setTypePlan } = useContext(GlobalVar);

  useEffect(() => {
    if (plan) {
      setTypePlan([1, selectPlan]);
    } else {
      setTypePlan([0, selectPlan]);
    }
  }, [plan, selectPlan, setTypePlan]);

  return (
    <Container>
      <div className="container">
        {" "}
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="cards">
          <Card
            svg={<Arcade />}
            name={"Arcade"}
            value={plan ? content.yr.plan[0].value : content.mo.plan[0].value}
            type={plan}
            idCard={0}
            setSelectPlan={setSelectPlan}
            className={selectPlan === 0 && "cardChecked"}
          />
          <Card
            svg={<Advanced />}
            name={"Advanced"}
            value={plan ? content.yr.plan[1].value : content.mo.plan[1].value}
            type={plan}
            idCard={1}
            setSelectPlan={setSelectPlan}
            className={selectPlan === 1 && "cardChecked"}
          />
          <Card
            svg={<Pro />}
            name={"Pro"}
            value={plan ? content.yr.plan[2].value : content.mo.plan[2].value}
            type={plan}
            idCard={2}
            setSelectPlan={setSelectPlan}
            className={selectPlan === 2 && "cardChecked"}
          />
        </div>
        <div>
          <label className={plan && "checked"}>Monthly</label>
          <PlanToggle setPlan={setPlan} />
          <label className={!plan && "checked"}>Yearly</label>
        </div>
      </div>
    </Container>
  );
};

export default Plan;
