import React, { useState } from "react";
import "./App.css";
import DisplayInput from "./components/DisplayInput";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
import ButtonBox from "./components/ButtonBox";

const buttonList = [
  "√",
  "^",
  "(",
  ")",
  "AC",
  "DEL",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const CALC_OPERATOR_LIST = ["+", "-", "*", "/", "%", "^", "√"];

function App() {
  const [displayInput, setDisplayInput] = useState("");

  const handleButtonClick = (key) => {
    const inputStr = String(displayInput);

    switch (key) {
      case "AC":
        setDisplayInput("");
        break;
      case "DEL":
        setDisplayInput(inputStr.slice(0, -1));
        break;
      case "=":
        try {
          const expression = displayInput
            .replace(
              /(\d+)\^(\d+)/g,
              (match, base, exponent) => `Math.pow(${base}, ${exponent})`
            )
            .replace(/√(\d+)/g, (match, number) => `Math.sqrt(${number})`);
          const result = eval(expression);
          setDisplayInput(String(result));
        } catch (error) {
          setDisplayInput("Error!");
        }
        break;
      default: {
        const isLastCharOperator = CALC_OPERATOR_LIST.includes(
          inputStr.slice(-1)
        );
        const isKeyOperator = CALC_OPERATOR_LIST.includes(key);

        if (isLastCharOperator && isKeyOperator) {
          setDisplayInput(inputStr.slice(0, -1) + key);
        } else {
          setDisplayInput(inputStr + key);
        }
        break;
      }
    }
  };

  const handleInputChange = (event) => {
    setDisplayInput(event.target.value);
  };

  return (
    <div>
      <h1>My Calculator</h1>
      <Wrapper>
        <DisplayInput value={displayInput} onChange={handleInputChange} />
        <ButtonBox>
          {buttonList.map((btn, index) => (
            <Button
              value={btn}
              key={index}
              onClick={() => handleButtonClick(btn)}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
