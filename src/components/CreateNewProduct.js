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

  const createProductEvent = async () => {
    try {
      setError("");
      setLoading(true);
      axios.post(
        "https://ecibastas-app.herokuapp.com/product/createNewProduct",
        {
          name: auctionRef.current.value,
          subasta: subasta,
          description: description.current.value,
          initialprice: precioinicial.current.value,
          actualprice: precioinicial.current.value,
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
          <Card style={{ width: "50em" }} className="card-style">
            <Card.Body>
              <center>
                <Form onSubmit={createProductEvent}>
                  <Form.Group as={Row}>
                    <Form.Label column sm="2">
                      Nombre:
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="text"
                        placeholder="Nombre del producto"
                        ref={auctionRef}
                        required
                      />
                    </Col>
                    <Form.Label column sm="2">
                      Descripcion:
                    </Form.Label>

                    <Col sm="10">
                      <Form.Control
                        type="text"
                        placeholder="Descripcion del producto"
                        ref={description}
                        required
                      />
                    </Col>
                    <Form.Label column sm="2">
                      Precio Inicial:
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="number"
                        placeholder="Precio inicial del producto"
                        ref={precioinicial}
                        required
                      />
                    </Col>
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
