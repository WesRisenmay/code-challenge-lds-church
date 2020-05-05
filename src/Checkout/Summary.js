import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import { useHistory } from "react-router";
import { Formik } from "formik";
import Input from "../Common/Input";
import shoppingContext, {
  convertFormikObjectToArray,
} from "../Common/shoppingContext";

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

const Form = styled.form`
  width: 100%;
  display: grid;
  grid-gap: inherit;
  justify-items: center;
`;

export default () => {
  const history = useHistory();
  const { items, setItems } = useContext(shoppingContext);

  const initialValues = items.reduce(
    (accumulator, { name, amount }) => ({
      ...accumulator,
      [name]: amount,
    }),
    {}
  );

  return (
    <Fragment>
      <Summary>
        <BodyContainer>
          <progress value={1} max={4} />

          <h2>Summary</h2>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const hasAnyValues = Object.values(values).find(
                (value) => value > 0
              );

              if (!hasAnyValues) {
                return Object.keys(values).reduce(
                  (accumulator, current) => ({
                    ...accumulator,
                    [current]: ["Cannot checkout without any items"],
                  }),
                  {}
                );
              }
            }}
            onSubmit={(values) => {
              setItems(convertFormikObjectToArray(values));
              history.push("/shipping");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quanity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(({ name }, index) => (
                      <tr key={name}>
                        <td>{name}</td>
                        <td>
                          <Input
                            key={name}
                            autoFocus={index === 0}
                            errors={touched[name] && errors[name]}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name={name}
                            label={name}
                            type="number"
                            step="1"
                            min="0"
                            value={values[name]}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Button type="submit">Next</Button>
              </Form>
            )}
          </Formik>
        </BodyContainer>
      </Summary>
    </Fragment>
  );
};
