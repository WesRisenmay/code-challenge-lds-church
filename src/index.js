import React, { useState } from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import styled from "styled-components";
import ShoppingContext from "./Common/shoppingContext";

const Container = styled.div`
  margin: 50px;
  max-width: 100vw;
  overflow: hidden;
`;

const App = () => {
  const [address, setAddress] = useState({});
  const [items, setItems] = useState([]);

  return (
    <Container>
      <ShoppingContext.Provider
        value={{
          address,
          setAddress,
          items,
          setItems,
        }}
      >
        <Routes />
      </ShoppingContext.Provider>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
