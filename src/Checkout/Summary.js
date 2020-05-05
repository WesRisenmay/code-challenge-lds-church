import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import { useHistory } from "react-router";

const Summary = styled.div``;

const BodyContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 16px;

  h1 {
    width: fit-content;
  }

  h2 {
    justify-self: flex-start;
  }
`;

const Table = styled.table`
  border: 1px solid black;
  width: 100%;

  th,
  td {
    border: 1px solid black;
  }
`;

const items = [
  {
    name: "item1",
    amount: 2,
  },
  {
    name: "item2",
    amount: 1,
  },
];

export default () => {
  const history = useHistory();

  return (
    <Fragment>
      <Summary>
        <BodyContainer>
          <progress value={1} max={4} />

          <h2>Summary</h2>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quanity</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ name, amount }) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button onClick={() => history.push("/shipping")}>Next</Button>
        </BodyContainer>
      </Summary>
    </Fragment>
  );
};
