import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../css/Card.css";
import { getNicknameByUserId } from "../services/UserAPI";

const MyAuctions = (props) => {
  const history = useHistory();
  const [state, setState] = useState("")
  const [error, setError] = useState("");

  const setAuctionState = () => {
    if (props.isActive) {
      axios.put(`https://ecibastas-app.herokuapp.com/subasta/setActive?active=false&subastaid=${props.subastaId}`)
    } else {
      axios.put(`https://ecibastas-app.herokuapp.com/subasta/setActive?active=true&subastaid=${props.subastaId}`)
    }
  }

  const enterToAuctionEvent = () => {
    localStorage.setItem("auctionName", props.name);
    localStorage.setItem("creator", props.creator);
    localStorage.setItem("subastaId", props.subastaId);

    history.push("/auction-dashboard");
  };

  useEffect(function () {
    if (props.isActive) {
      setState("Subasta Activa")
    } else {
      setState("Subasta Inactiva")
    }
  })

  return (
    <Col className="justify-content-center">
      <Card className="card-style">
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{state}</Card.Text>
          <button className="button-style-card" onClick={enterToAuctionEvent}>Entrar a Subasta</button>
          <div className="mt-2" />
          <button className="button-style-card" onClick={setAuctionState}>Activar/Desactivar Subasta</button>
          <div className="mt-2" />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyAuctions;
