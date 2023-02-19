import styled from "@emotion/styled";
import React from "react";

const Button = styled("button")`
  height: 40px;
  width: 40px;
  border: 2px solid black;
  border-radius: 50%;
  font-size: 22px;
  display: flex;
  padding-top: 3px;
  align-content: center;
  justify-content: center;
`;

const AddButton = () => {
  return <Button>+</Button>;
};

export default AddButton;
