import React from "react";
import styled from "styled-components";

const colorMapper = {
  primary: "blue",
  secondary: "grey",
};

export default styled.button`
  background-color: ${({ variation }) =>
    colorMapper[variation] || colorMapper.primary};
  border: none;
  color: white;
  padding: 4px;
  width: fit-content;
`;
