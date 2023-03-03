import React, { useState } from "react";
import Container from "./styles";

const PlanToggle = ({ setPlan }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (active) {
      setActive(false);
      setPlan(false);
    } else {
      setActive(true);
      setPlan(true);
    }
  };

  return (
    <Container onClick={handleClick}>
      <div className={active && "active"}></div>
    </Container>
  );
};

export default PlanToggle;
