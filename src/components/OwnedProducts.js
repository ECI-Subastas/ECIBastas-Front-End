import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductAPI";
import Product from "./Product";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import NavigationBar from "./NavigationBar";
import { Container, Row, Button, Card } from "react-bootstrap";
import "../css/Card.css";
import MyProducts from "./MyProducts";

const AuctionDashboard = () => {
  var message;
  var vacio = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  useEffect(function () {
    getAllProducts(localStorage.getItem("subastaId")).then((res) =>
      setProducts(res)
    );
  });

  return (
    <>
      <NavigationBar />
      <Container fluid="md">
        <div className="mt-4" />
        <center>
          <h1>INFORMACIÓN</h1>
          <p>Nombre: {localStorage.getItem("auctionName")}</p>
          <p>Id: {localStorage.getItem("subastaId")}</p>
          <p>Creador: {localStorage.getItem("creator")}</p>
        </center>
        <div className="mt-4" />
        <Row className="justify-content-center" lg={5} md={5} sm={3} xs={2}>
          {products.map((product) => {
            if (product.owner_user == localStorage.getItem("userId")) {
              return (
                <MyProducts
                  name={product.name}
                  description={product.description}
                  owner={product.owner_user}
                ></MyProducts>
              );
            }
          })}
        </Row>
      </Container>
    </>
  );
};

export default AuctionDashboard;
