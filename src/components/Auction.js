import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../css/Card.css";

const Auction = (props) => {
  const history = useHistory();

  const enterToAuctionEvent = () => {
    localStorage.setItem("auctionName", props.name);
    localStorage.setItem("creator", props.creator);
    localStorage.setItem("subastaId", props.subastaId);

    history.push("/auction-dashboard");
  };

  return (
    <Col className="justify-content-center">
      <Card className="card-style">
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Creator: {props.creator}</Card.Text>
          <button className="button-style-card" onClick={enterToAuctionEvent}>
            Ingresar a Subasta
          </button>
        </Card.Body>
      </Card>

      <div class="mt-4" />
    </Col>
  );
};

export default Auction;
