import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { useHistory } from "react-router";

const items = [
  {
    name: "The Book of Mormon: Another Testament of Jesus Christ",
    image:
      "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/2018-2019:%20November-January/100_30923000_000_p_348.jpg",
  },
  {
    name: "Holy Bible",
    image:
      "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/2018-2019:%20November-January/Mason%20Images/340300_11673000_000_p_348.jpg",
  },
  {
    name: "Triple Combination",
    image:
      "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/000/340400_11674000_000_p_348.jpg",
  },
];

const ItemsContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  width: 100%;
`;

const Item = styled.div`
  border: solid 1px black;
  margin: 8px;
  text-align: center;

  img {
    width: 100%;
  }
`;

const Form = styled.form`
  display: grid;
  grid-gap: 16px;
`;

const StyledButton = styled(Button)`
  justify-self: center;
`;

const Items = styled.div`
  text-align: center;
`;

export default () => {
  const initialValues = items.reduce(
    (accumulator, { name }) => ({
      ...accumulator,
      [name]: "0",
    }),
    {}
  );

  const history = useHistory();

  return (
    <Items>
      <h1>Welcome</h1>
      <p>Please choose some free items to order:</p>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const hasAnyValues = Object.values(values).find((value) => value > 0);

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
          history.push("/checkout");
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
            <ItemsContainer>
              {items.map(({ name, image }, index) => (
                <Item key={name}>
                  <img src={image} />
                  <Input
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
                </Item>
              ))}
            </ItemsContainer>

            <StyledButton type="submit">Checkout</StyledButton>
          </Form>
        )}
      </Formik>
    </Items>
  );
};
