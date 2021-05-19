import React from "react";
import { Card, Col, Form, Button } from "react-bootstrap";
import "../css/Card.css"

const MyProducts = (props) => {
  return (
    <Card className="card-style">
      <Card.Body>
        <Card.Title>NAME: {props.name}</Card.Title>
        <Card.Text>DESCRIPTION: {props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyProducts;
