import React from "react";
import { Link } from "react-router-dom";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Summary from "./Summary";
import Shipping from "./Shipping";
import Confirmation from "./Confirmation";
import Thanks from "./Thanks";

const Checkout = styled.div`
  h1 {
    text-align: center;
  }
`;

export default () => {
  return (
    <Checkout>
      <Link to="/">{"< Home"}</Link>

      <h1>Checkout</h1>

      <MemoryRouter>
        <Switch>
          <Route path="/shipping">
            <Shipping />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="/thanks">
            <Thanks />
          </Route>
          <Route path="/">
            <Summary />
          </Route>
        </Switch>
      </MemoryRouter>
    </Checkout>
  );
};
