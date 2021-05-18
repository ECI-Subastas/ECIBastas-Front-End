import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUserByEmail } from "../services/UserAPI";
import NavigationBar from "./NavigationBar";
import "../css/Card.css";
import imgSubasta from "../images/subasta.jpg";

const CreateNewProduct = () => {
  const auctionRef = useRef();
  const history = useHistory();
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
        "https://ecibastas-app.herokuapp.com/subasta/createNewProduct",
        {
          name: auctionRef.current.value,
          creator: user.user_id,
        }
      );

      history.push("/dashboard");
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
          <Card style={{ width: "80em" }} className="card-style">
            <Card.Body>
              <Card.Img src={imgSubasta} />
              <div className="mt-4" />
              <Form onSubmit={createAuctionEvent}>
                <Form.Group as={Row}>
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
                </Form.Group>
                <Button type="submit">Crear Nuevo Producto</Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default CreateNewProduct;
