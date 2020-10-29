import React from "react";
import styled from "styled-components";
import { colors } from "../utils/variables";

const StyledButton = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
  font-size: 16px;
  font-weight: 400;
  color: beige;
  background-color: ${colors.blue};
  border: none;
  border-radius: 40px;

  :focus {
    outline: none;
  }
`;

export const Button = ({
  children,
  onClick
}: {
  children: string;
  onClick: () => void;
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
