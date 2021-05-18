import React, { useEffect, useState, useRef } from "react";
import { getUserByEmail } from "../services/UserAPI";
import { Card, Button, Form, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

const Product = (props) => {
  const creditRef = useRef();
  const email = localStorage.getItem("userEmail");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  var precio = props.actualprice;
  var id = props.productid;
  const [user, setUser] = useState({});

  useEffect(function () {
    getUserByEmail(email).then((Response) => {
            setUser(Response);
    });
});

  const enterToPujarEvent = async () => {
    try {
      if ( (5 + precio) <= user.credit) {
        setError("");
        setLoading(true);
        axios
          .put(
            `https://ecibastas-app.herokuapp.com/product/pujarDefault?productid=${id}`
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(`Error: ${error}`);
          });
      } else {
        swal({
          title: "Pujar",
          icon: "error",
          text: "Error, creditos insuficientes",
          timer: "5000",
        });
      }

    } catch (error) {
      setError("Error during user register.");
    }

    setLoading(false);
  };

  const enterToPerPujarEvent = async () => {
    var credits = creditRef.current.value;
    if (credits <= 0) {
      swal({
        title: "Pujar",
        icon: "error",
        text: "Error, valor incorrecto",
        timer: "5000",
      });
      setLoading(false);
    } else if (Number(credits)+Number(precio) > Number(user.credit)) {
      swal({
        title: "Pujar",
        icon: "error",
        text: "Error, Creditos insuficientes",
        timer: "5000",
      });
    } else {
      try {
        setError("");
        setLoading(true);
        
        axios
          .put(
            `https://ecibastas-app.herokuapp.com/product/pujarPersonalize?productid=${id}&credits=${credits}`
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(`Error: ${error}`);
          });

      } catch (error) {
        setError("Error during product auction event.");
      }
    }
  };

  return (
    <Card style={{ width: "17rem" }}>
      <Card.Body>
        <Card.Title>NAME: {props.name}</Card.Title>
        <Card.Text>AUCTION ID: {props.subasta}</Card.Text>
        <Card.Text>DESCRIPTION: {props.description}</Card.Text>
        <Card.Text>INITIAL PRICE: {props.initialprice}</Card.Text>
        <Card.Text>ACTUAL PRICE: {props.actualprice}</Card.Text>
        <center>
          <Button variant="primary" onClick={enterToPujarEvent}>
            Pujar 5 Creditos
          </Button>
          <div className="mt-4" />
          <Form onSubmit={enterToPerPujarEvent}>
                <Form.Group as={Row}>
                    <Form.Control
                      type="number"
                      placeholder="Creditos"
                      ref={creditRef}
                      required
                    />
                </Form.Group>
                <Button type="submit">Pujar</Button>
              </Form>
        </center>
      </Card.Body>
    </Card>
  );
};

export default Product;
