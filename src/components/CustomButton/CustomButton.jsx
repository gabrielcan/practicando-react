import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ handle,nomButton}) => {
  return (
    <div>
      <Button variant="outline-primary" className="botonAdd" onClick={handle}>
        {nomButton}
      </Button>
    </div>
  );
};

export default CustomButton;
