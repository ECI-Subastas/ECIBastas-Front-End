import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUserByEmail } from "../services/UserAPI";
import NavigationBar from "./NavigationBar";
import "../css/Card.css";
import swal from "sweetalert";

const CreateNewProduct = () => {
  const auctionRef = useRef();
  const description = useRef();
  const precioinicial = useRef();
  const precioactual = useRef();
  const history = useHistory();
  const subasta = localStorage.getItem("subastaId");
  const email = localStorage.getItem("userEmail");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    getUserByEmail(email).then((Response) => {
      setUser(Response);
    });
  });

  const createAuctionEvent = async () => {
    try {
      setError("");
      setLoading(true);
      axios.post(
        "https://ecibastas-app.herokuapp.com/product/createNewProduct",
        {
          name: auctionRef.current.value,
          description: description.current.value,
          precioinicial: precioinicial,
          precioactual: precioinicial,
          subasta: subasta,
        }
      );

      history.push("/dashboard");
      swal({
        title: "Creacion de producto",
        icon: "info",
        text: "Producto creado con exito en la subasta " + subasta,
        timer: "5000",
      });
    } catch (error) {
      setError("Error during auction creation");
    }

    setLoading(false);
  };

  return (
    <>
      <NavigationBar />
      <Container fluid>
        <div className="mt-4" />
        <Row className="justify-content-center">
          <Card style={{ width: "40em" }} className="card-style">
            <Card.Body>
              <center>
                <Form onSubmit={createAuctionEvent}>
                  <Form.Group as={Row}>
                    &nbsp;&nbsp;&nbsp;
                    <Form.Label column sm="2">
                      Nombre:
                    </Form.Label>
                    <Col sm="15">
                      <Form.Control
                        type="text"
                        placeholder="Nombre del producto"
                        ref={auctionRef}
                        required
                      />
                    </Col>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Form.Label column sm="3">
                      Descripcion:
                    </Form.Label>
                    <div className="mt-4" />
                    <Col sm="60">
                      <Form.Control
                        type="text"
                        placeholder="Descripcion del producto"
                        ref={description}
                        required
                      />
                    </Col>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Form.Label column sm="3">
                      Precio Inicial:
                    </Form.Label>
                    <Col sm="15">
                      <Form.Control
                        type="number"
                        placeholder="Precio inicial del producto"
                        ref={precioinicial}
                        required
                      />
                    </Col>
                    <input type="file" id="filechooser"></input>
                  </Form.Group>
                  <Button type="submit">Crear Nuevo Producto</Button>
                </Form>
              </center>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default CreateNewProduct;
