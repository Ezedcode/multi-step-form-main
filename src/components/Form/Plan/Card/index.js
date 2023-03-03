import React, { useEffect, useState } from "react";
import Container from "./styles";

const Card = ({ idCard, svg, name, value, type, className, setSelectPlan }) => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click) {
      setSelectPlan(idCard);
      setClick(false);
    }
  }, [click, setClick, idCard, setSelectPlan]);

  return (
    <Container onClick={() => setClick(true)}>
      <div className={className}>
        <div>{svg}</div>
        <div>
          <label>{name}</label>
          <span className="value">${type ? value + "/yr" : value + "/mo"}</span>
          {type && <span>2 months free</span>}
        </div>
      </div>
    </Container>
  );
};

export default Card;
