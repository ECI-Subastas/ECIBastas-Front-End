import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import "../css/Card.css";
import { getNicknameByUserId } from "../services/UserAPI";

const MyAuctions = (props) => {
  return (
    <Col className="justify-content-center">
      <Card className="card-style">
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <div className="mt-3" />
          <button className="button-style-card">Editar Subasta</button>
          <div className="mt-2" />
          <button className="button-style-card">Editar Productos</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyAuctions;
