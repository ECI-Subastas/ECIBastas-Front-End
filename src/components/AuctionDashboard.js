import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductAPI";
import Product from "./Product";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import NavigationBar from "./NavigationBar";
import { Container, Row, Button, Card } from "react-bootstrap";
import "../css/Card.css"

const AuctionDashboard = () => {
  var bproduct;
  var stopAuction
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  const createProduct = () => {
    history.push("/createNewProduct");
  };

  useEffect(function () {
    getAllProducts(localStorage.getItem("subastaId")).then((res) =>
      setProducts(res)
    );
  });

  if (localStorage.getItem("userId") === localStorage.getItem("creator")) {
    bproduct = (
      <Button onClick={createProduct}>Añadir productos a la Subasta</Button>
    );
  }

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  async function handleDashboard() {
    setError("");

    try {
      history.push("/dashboard");
    } catch {
      setError("Failed to log out");
    }
  }

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
          <div className="overflow-auto h-auto">{bproduct}</div>
          <div className="mt-2" />
          <div className="overflow-auto h-auto">{stopAuction}</div>
        </center>
        <div className="mt-4" />
        <Row className="justify-content-center" lg={5} md={5} sm={3} xs={2}>
          {products.map((product) => (
            <Product
              productid={product.product_id}
              name={product.name}
              subasta={product.subasta}
              description={product.description}
              initialprice={product.initialprice}
              actualprice={product.actualprice}
              owner={product.owner_user}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AuctionDashboard;
