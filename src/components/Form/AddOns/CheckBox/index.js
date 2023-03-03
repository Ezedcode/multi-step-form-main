import React, { useEffect, useState } from "react";
import Checkmark from "../../../../assets/images/Checkmark";
import Container from "./styles";

const CheckBox = ({ serviceName, serviceDesc, value, type, setCheck }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  useEffect(() => {
    setCheck(active);
  }, [active, setCheck]);

  return (
    <Container onClick={handleClick} className={active && "checked"}>
      <div>
        <div>
          <div className="checkBox">
            <Checkmark />
          </div>
          <div>
            <label>{serviceName}</label>
            <p>{serviceDesc}</p>
          </div>
        </div>
        <div>+${type === 0 ? value + "/mo" : value + "/yr"}</div>
      </div>
    </Container>
  );
};

export default CheckBox;
