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

export default ({ errors = [], label, ...rest }) => {
  return (
    <Container>
      <label>
        {label}
        <input {...rest} />
      </label>
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
