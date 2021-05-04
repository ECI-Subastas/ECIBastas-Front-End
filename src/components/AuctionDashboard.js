import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductAPI";
import Product from "./Product";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import NavigationBar from "./NavigationBar";
import { Container, Row } from "react-bootstrap";

const AuctionDashboard = () => {
  var [publications, setPublications] = useState([]);
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  useEffect(function () {
    getAllProducts(localStorage.getItem("subastaId")).then((res) =>
      setPublications(res)
    );
  });

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

      <div className="overflow-auto h-auto">
        {publications.map((publication) => (
          <Product
            productid={publication.product_id}
            name={publication.name}
            subasta={publication.subasta}
            description={publication.description}
            initialprice={publication.initialprice}
            actualprice={publication.actualprice}
          />
        ))}
      </div>
    </>
  );
};

export default AuctionDashboard;
