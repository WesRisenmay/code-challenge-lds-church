import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import { useHistory } from "react-router";
import ProgressBar from "./ProgressBar";

const Confirmation = styled.div``;

const BodyContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  h1 {
    width: fit-content;
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

const Address = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 4px;
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

const name = "Jane Doe";
const street = "123 Main St.";
const city = "Somewhere Neat";
const state = "UT";
const zip = "88888";

export default () => {
  const history = useHistory();

  return (
    <Fragment>
      <ProgressBar stepNumber={3} />
      <Confirmation>
        <BodyContainer>
          <h2>Confirmation</h2>
          <p>Please confirm that the following information is correct:</p>
          <h3>Items</h3>
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
          <h3>Shipping</h3>
          <Address>
            <span>{name}</span>
            <span>{street}</span>
            <span>{`${city}, ${state} ${zip}`}</span>
          </Address>
          <ButtonContainer>
            <Button
              variation="secondary"
              onClick={history.goBack}
              type="button"
            >
              Previous
            </Button>
            <Button type="button" onClick={() => history.push("/thanks")}>
              Next
            </Button>
          </ButtonContainer>
        </BodyContainer>
      </Confirmation>
    </Fragment>
  );
};
