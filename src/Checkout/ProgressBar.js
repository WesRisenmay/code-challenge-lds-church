import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default ({ stepNumber }) => {
  return (
    <ProgressBarContainer>
      <progress value={stepNumber} max={4} />
    </ProgressBarContainer>
  );
};
