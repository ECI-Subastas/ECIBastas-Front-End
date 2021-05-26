import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../css/Card.css";

const MyAutionProducts = (props) => {
  const history = useHistory();

  const enterToAuctionEvent = () => {
    localStorage.setItem("auctionName", props.name);
    localStorage.setItem("creator", props.creator);
    localStorage.setItem("subastaId", props.subastaId);

    history.push("/my-products-in-auction");
  };

  return (
    <Col className="justify-content-center">
      <Card className="card-style">
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.subastaId}</Card.Text>
          <button className="button-style-card" onClick={enterToAuctionEvent}>
            Ver mis productos
          </button>
        </Card.Body>
      </Card>

      <div class="mt-4" />
    </Col>
  );
};

export default MyAutionProducts;
