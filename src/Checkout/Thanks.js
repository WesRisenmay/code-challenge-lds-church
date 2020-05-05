import React, { Fragment, useEffect, useContext } from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";
import shoppingContext from "../Common/shoppingContext";

const StyledP = styled.p`
  text-align: center;
`;

export default () => {
  const { setItems, setAddress } = useContext(shoppingContext);

  useEffect(() => {
    setItems([]);
    setAddress({});
  }, []);

  return (
    <Fragment>
      <ProgressBar stepNumber={4} />
      <StyledP>Thank you!</StyledP>
    </Fragment>
  );
};
