import React, { Fragment } from "react";
import ProgressBar from "./ProgressBar";
import styled from 'styled-components';

const StyledP = styled.p`
    text-align: center;
`;

export default () => {
  return (
    <Fragment>
      <ProgressBar stepNumber={4} />
      <StyledP>Thank you!</StyledP>
    </Fragment>
  );
};
