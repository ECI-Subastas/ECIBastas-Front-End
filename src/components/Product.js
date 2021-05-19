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
  const userId = localStorage.getItem("userId");
  const auctionCreator = localStorage.getItem("creator");
  const [user, setUser] = useState({});

  useEffect(function () {
    getUserByEmail(email).then((Response) => {
      setUser(Response);
    });
  });

  const enterToPujarEvent = async () => {
    try {
      if (5 + precio <= user.credit && auctionCreator != userId) {
        if (props.owner != userId) {
          setError("");
          setLoading(true);
          axios.put(
            `https://ecibastas-app.herokuapp.com/product/pujar?productid=${props.productid}&credits=5&userid=${userId}`
          );
        } else {
          swal({
            title: "Error al Pujar",
            icon: "error",
            text: "Ya eres el que mas ha pujado por este producto. DEJA DE PUJAR!!!",
            timer: "5000",
          });
        }
      } else if (auctionCreator === userId) {
        swal({
          title: "Error al Pujar",
          icon: "error",
          text: "Eres el dueño de la subasta. NO PUEDES PUJAR!!!",
          timer: "5000",
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
    try {
      var credits = creditRef.current.value;

      setError("");
      setLoading(true);

      if (auctionCreator != userId && credits > 0 && auctionCreator != userId) {
        if (props.owner != userId) {
          axios.put(
            `https://ecibastas-app.herokuapp.com/product/pujar?productid=${id}&credits=${credits}&userid=${userId}`
          );
        } else {
          swal({
            title: "Error al Pujar",
            icon: "error",
            text: "Ya eres el que mas ha pujado por este producto. DEJA DE PUJAR!!!",
            timer: "5000",
          });
        }
      } else if (auctionCreator === userId) {
        swal({
          title: "Error al Pujar",
          icon: "error",
          text: "Eres el dueño de la subasta, NO PUEDES PUJAR!!!",
          timer: "5000",
        });
      } else if (credits <= 0) {
        swal({
          title: "Error al Pujar",
          icon: "error",
          text: "Error, El valor introducido es incorrecto.",
          timer: "5000",
        });
      } else if (Number(credits) + Number(precio) > Number(user.credit)) {
        swal({
          title: "Error al Pujar",
          icon: "error",
          text: "Error, Creditos Insuficientes",
          timer: "5000",
        });
      } else {
        swal({
          title: "Error al Pujar",
          icon: "error",
          text: "Error, Creditos Insuficientes",
          timer: "5000",
        });
      }

      setLoading(false);
    } catch (error) {
      setError("A ocurrido un error realizando una puja personalizada.");
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
          <Form>
            <Form.Group>
              <Form.Control type="number" ref={creditRef} defaultValue="1" />
            </Form.Group>
          </Form>
          <Button onClick={enterToPerPujarEvent}>Pujar</Button>
        </center>
      </Card.Body>
    </Card>
  );
};

export default Product;
