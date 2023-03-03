import React from "react";
import IconThankYou from "../../../../assets/images/IconThankYou";
import Container from "./styles";

const ThankYou = () => {
  return (
    <Container className="thankyou">
      <div className="container">
        <IconThankYou />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If your ever need suport, please fell free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </Container>
  );
};

export default ThankYou;
