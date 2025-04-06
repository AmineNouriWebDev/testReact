import React from "react";
import { Button } from "react-bootstrap";
const MyButton = () => {
  return (
    <>
      <h1>Ceci est un titre </h1>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </>
  );
};

export default MyButton;
