import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Dashboard.css";
import Auction from "./Auction";
import { getAllAuctions } from "../services/AuctionAPI";
import NavigationBar from "./NavigationBar";
import { Container, Row } from "react-bootstrap";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  var [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    getAllAuctions().then((res) => setPublications(res));
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

  async function testFunc() {
    setError("");

    try {
      history.push("/nav-bar");
    } catch {
      setError("Fail");
    }
  }

  return (
    <>
      <NavigationBar />
      <div class="mt-4" />
      <Container fluid="md">
        <Row className="justify-content-center" lg={5} md={5} sm={3} xs={2}>
          {publications.map((publication) => (
            <Auction
              subastaId={publication.subastaId}
              name={publication.name}
              creator={publication.creator}
            ></Auction>
          ))}
        </Row>
      </Container>
      <div class="mt-4"></div>
    </>
  );
}
