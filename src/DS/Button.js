import React, { useState } from "react";
import styled from "styled-components";

const Button = ({ children, handleClick, width, reverse, type }) => {
  const [btnColor, setBtnColor] = useState(reverse ? "black" : "white");

  return (
    <ButtonWrapper
      onClick={handleClick}
      color={btnColor}
      onMouseEnter={() => setBtnColor(reverse ? "white" : "black")}
      onMouseLeave={() => setBtnColor(reverse ? "black" : "white")}
      width={width}
      type={type}
    >
      {children}
    </ButtonWrapper>
  );
};
export default Button;

const ButtonWrapper = styled.button`
  width: ${(props) => (props.width ? `${props.width}px` : "100px")};
  height: 50px;
  background-color: ${(props) => (props.color ? props.color : "white")};
  font-weight: 600;
  font-size: 16px;
  border: ${(props) =>
    props.color === "black" ? "2px solid white" : "2px solid black"};
  cursor: pointer;
  color: ${(props) => (props.color === "white" ? "black" : "white")};
  transition-duration: 0.5s;
`;
