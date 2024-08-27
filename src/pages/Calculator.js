import React, { useState } from "react";
import "../App.css";
import DisplayInput from "../components/DisplayInput";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import ButtonBox from "../components/ButtonBox";

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

function Calculator() {
  const [displayInput, setDisplayInput] = useState("");
  const [isEqual, setIsEqual] = useState(false);

  const roundToDecimalPlaces = (number, decimalPlaces) => {
    const factor = 10 ** decimalPlaces;
    return Math.round(number * factor) / factor;
  };

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
          let result = eval(expression);
          result = roundToDecimalPlaces(result, 10);

          setDisplayInput(String(result));
          setIsEqual(true);
        } catch (error) {
          setDisplayInput("Error!");
          setIsEqual(true);
        }
        break;
      default: {
        if (isEqual) {
          setDisplayInput(key);
          setIsEqual(false);
        } else {
          const isLastCharOperator = CALC_OPERATOR_LIST.includes(
            inputStr.slice(-1)
          );
          const isKeyOperator = CALC_OPERATOR_LIST.includes(key);

          if (isLastCharOperator && isKeyOperator) {
            setDisplayInput(inputStr.slice(0, -1) + key);
          } else {
            setDisplayInput(inputStr + key);
          }
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
      <h1 className="text-2xl mb-8">Calculator</h1>
      <Wrapper>
        <DisplayInput value={displayInput} onChange={handleInputChange} />
        <ButtonBox>
          {buttonList.map((btn, index) => (
            <div className="w-auto h-auto flex justify-center items-center">
              <Button
                value={btn}
                key={index}
                onClick={() => handleButtonClick(btn)}
              />
            </div>
          ))}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default Calculator;
