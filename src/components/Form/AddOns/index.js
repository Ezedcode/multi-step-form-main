import React, { useState, useContext, useEffect } from "react";
import GlobalVar from "../../../context/Globalvar";
import CheckBox from "./CheckBox";
import Container from "./styles";
import content from "../../../content/plan.json";

const AddOns = () => {
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);

  const { click, typePlan, setClick, setcheckBox } = useContext(GlobalVar);

  useEffect(() => {
    if (click) {
      setcheckBox([checkBox1, checkBox2, checkBox3]);
    }
  }, [checkBox1, checkBox2, checkBox3, click, setClick, setcheckBox]);

  return (
    <Container>
      <div className="container">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div>
          <CheckBox
            serviceName={content.addons[0].desc}
            serviceDesc={"Access to multiplayer games"}
            value={
              typePlan[0] === 0
                ? content.addons[0].value[0]
                : content.addons[0].value[1]
            }
            type={typePlan[0]}
            setCheck={setCheckBox1}
          />
          <CheckBox
            serviceName={content.addons[1].desc}
            serviceDesc={"Extra 1TB of cloud save"}
            value={
              typePlan[0] === 0
                ? content.addons[1].value[0]
                : content.addons[1].value[1]
            }
            type={typePlan[0]}
            setCheck={setCheckBox2}
          />
          <CheckBox
            serviceName={content.addons[2].desc}
            serviceDesc={"Cutom theme on your profile"}
            value={
              typePlan[0] === 0
                ? content.addons[2].value[0]
                : content.addons[2].value[1]
            }
            type={typePlan[0]}
            setCheck={setCheckBox3}
          />
        </div>
      </div>
    </Container>
  );
};

export default AddOns;
