import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 4px;
`;

const Errors = styled.div`
  display: grid;
  grid-gap: 4px;
`;

const Error = styled.div`
  color: red;
`;

const Label = styled.label`
  display: grid;
  grid-gap: 4px;
  margin: 8px;
`;

export default ({ errors = [], label, ...rest }) => {
  return (
    <Container>
      <Label>
        {label}
        <input {...rest} />
      </Label>
      {errors && errors.length ? (
        <Errors>
          {errors.map((error) => (
            <Error key={error}>{error}</Error>
          ))}
        </Errors>
      ) : (
        ""
      )}
    </Container>
  );
};
