import React, { useContext, useEffect, useState } from "react";
import GlobalVar from "../../../../context/Globalvar";

const Input = ({ type, name, placeholder, nameFor, setControl }) => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState(false);
  const { click } = useContext(GlobalVar);

  useEffect(() => {
    if (click) {
      const showError = () => {
        if (input.trim().length === 0) {
          setControl(true);
          setMessage(true);
        }
      };
      showError();
    } else if (input.trim().length !== 0) {
      setMessage(false);
      setControl(false);
    }
  }, [input, click, setControl]);

  return (
    <div>
      <div>
        <label for={nameFor}>{name}</label>
        {message && <span>This field is requered</span>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
        className={message && "error"}
      />
    </div>
  );
};

export default Input;
