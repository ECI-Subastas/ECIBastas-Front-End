import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Auction = (props) => {
  const history = useHistory();

  const enterToAuctionEvent = () => {
    localStorage.setItem("name", props.name);
    localStorage.setItem("creator", props.creator);
    localStorage.setItem("subastaId", props.subastaId);

    history.push("/auction-dashboard");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.creator}</Card.Text>
        <Card.Text>{props.subastaId}</Card.Text>
        <Button variant="primary" onClick={enterToAuctionEvent}>
          Go to subasta
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Auction;
