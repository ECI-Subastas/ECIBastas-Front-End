import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductAPI";
import Product from "./Product";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import NavigationBar from "./NavigationBar";
import { Container, Row, Button } from "react-bootstrap";

const AuctionDashboard = () => {
  
  var bproduct = <h1>No hay productos en esta subasta</h1>;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  const createProduct = () =>{
    history.push("/createNewProduct")

  }

  useEffect(function () {
    getAllProducts(localStorage.getItem("subastaId")).then((res) =>
      setProducts(res)
    );
  });

  if (
    localStorage.getItem("userId") === localStorage.getItem("creator") &&
    products.length === 0
  ) {
    bproduct = <Button onClick={createProduct} >Añadir productos a la Subasta</Button>;
  }
 
  if (products.length > 0) {
    bproduct = products.map((product) => {
      return (
        <Product
          productid={product.product_id}
          name={product.name}
          subasta={product.subasta}
          description={product.description}
          initialprice={product.initialprice}
          actualprice={product.actualprice}
        />
      );
    });
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
      <h1>INFORMATION</h1>
      <p>Name: {localStorage.getItem("auctionName")}</p>
      <p>Id: {localStorage.getItem("subastaId")}</p>
      <p>Creator: {localStorage.getItem("creator")}</p>

      <div className="overflow-auto h-auto">{bproduct}</div>
    </>
  );
};

export default AuctionDashboard;
