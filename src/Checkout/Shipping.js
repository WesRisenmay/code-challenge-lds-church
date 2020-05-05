import React, { Fragment } from "react";
import { Formik } from "formik";
import Button from "../Common/Button";
import Input from "../Common/Input";
import { useHistory } from "react-router";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const Form = styled.form`
  display: grid;
  grid-gap: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 4px;
  }
`;

export default () => {
  const history = useHistory();

  return (
    <Fragment>
      <ProgressBar stepNumber={2} />
      <h2>Shipping Information</h2>

      <Formik
        initialValues={{
          name: "",
          street: "",
          city: "",
          state: "",
          zip: "",
        }}
        validate={(values) => {
          return Object.entries(values).reduce((accumulator, [key, value]) => {
            if (value) {
              return accumulator;
            }

            return {
              ...accumulator,
              [key]: ["Required"],
            };
          }, {});
        }}
        onSubmit={(values) => {
          history.push("/confirmation");
        }}
      >
        {({
          values: { name, street, city, state, zip },
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              autoFocus
              errors={touched.name && errors.name}
              onBlur={handleBlur}
              onChange={handleChange}
              name="name"
              label="Name"
              value={name}
            />
            <Input
              errors={touched.street && errors.street}
              onBlur={handleBlur}
              onChange={handleChange}
              name="street"
              label="Street"
              value={street}
            />
            <Input
              errors={touched.city && errors.city}
              onBlur={handleBlur}
              onChange={handleChange}
              name="city"
              label="City"
              value={city}
            />
            <Input
              errors={touched.state && errors.state}
              onBlur={handleBlur}
              onChange={handleChange}
              name="state"
              label="State"
              value={state}
            />
            <Input
              errors={touched.zip && errors.zip}
              onBlur={handleBlur}
              onChange={handleChange}
              name="zip"
              label="Zip"
              value={zip}
              type="number"
            />
            <ButtonContainer>
              <Button
                variation="secondary"
                onClick={history.goBack}
                type="button"
              >
                Previous
              </Button>
              <Button type="submit">Next</Button>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};
