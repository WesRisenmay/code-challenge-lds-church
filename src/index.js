import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px;
  max-width: 100vw;
  overflow: hidden;
`;

const App = () => {
  return (
    <Container>
      <Routes />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
