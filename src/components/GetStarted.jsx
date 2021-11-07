import Button from "@restart/ui/esm/Button";
import React from "react";
import { Row } from "react-bootstrap";
import "./GetStarted.css";

export default function Getstarted() {
  return (
    <Row className='getstarted'>
      <h1 style={{ color: "white" }} id="getstartedh1">Get started today!</h1>
      <Button className='learnhow' style={{ marginTop: "0px" }}>
        PICK A PLAN
      </Button>
    </Row>
  );
}
