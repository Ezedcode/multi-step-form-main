import React, { useContext, useEffect, useState } from "react";
import GlobalVar from "../../../../context/Globalvar";
import Container from "./styles";
import content from "../../../../content/plan.json";
import Change from "../../../Btns/Change";

const FinishingUp = () => {
  const [total, setTotal] = useState(0);
  const [services, setServices] = useState(0);
  const { typePlan, checkBox } = useContext(GlobalVar);

  const setValue = (value) => {
    setTotal(value);
  };

  const showService = (value, index) => {
    if (value) {
      return (
        <div className="principalArea">
          <p>{content.addons[index].desc}</p>
          <span>
            +${content.addons[index].value[typePlan[0]]}/
            {typePlan[0] === 0 ? "mo" : "yr"}
          </span>
        </div>
      );
    }
  };
  useEffect(() => {
    let sum = 0;
    let planValue =
      typePlan[0] === 0
        ? content.mo.plan[typePlan[1]].value
        : content.yr.plan[typePlan[1]].value;

    if (typePlan[0] === 0) {
      setServices(0);
    } else {
      setServices(1);
    }

    for (let value in content.addons) {
      if (checkBox[value]) {
        sum += content.addons[value].value[services];
      }
    }

    setValue(sum + planValue);
  }, [checkBox, services, typePlan]);

  return (
    <Container>
      <div className="container">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div class="first">
          <div className="typePlan principalArea">
            <div>
              <div>
                {content.mo.plan[typePlan[0]].id} (
                {typePlan[0] === 0 ? "Monthly" : "Yearly"})
              </div>
              <Change />
            </div>
            <span>
              +$
              {typePlan[0] === 0
                ? content.mo.plan[typePlan[1]].value + "/mo"
                : content.yr.plan[typePlan[1]].value + "/yr"}
            </span>
          </div>
          {(checkBox[0] || checkBox[1] || checkBox[2]) && (
            <div className="services">
              <hr />
              {checkBox.map(showService)}
            </div>
          )}
        </div>
        <div className="total">
          <p>Total (per {typePlan[0] === 0 ? "month" : "year"})</p>
          <span className="total">
            +${total}
            {typePlan[0] === 0 ? "/mo" : "/yr"}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default FinishingUp;
