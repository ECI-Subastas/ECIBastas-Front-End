import React, { useState } from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavigationBar.css";
import logoecibastas from "../images/logoecibastas.png";
import houseIcon from "../images/icons/house-icon.png";
import auctionIcon from "../images/icons/auction-icon.png";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const NavigationBar = (props) => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  const goToDashboard = () => {
    setError("");

    try {
      history.push("/dashboard");
    } catch {
      setError("Fail");
    }
  };

  const goToCreateAuction = () => {
    setError("");

    try {
      history.push("/create-auction");
    } catch {
      setError("Fail");
    }
  };

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to logout");
    }
  };

  return (
    <Navbar className="navbg" expand="lg">
      <Navbar.Brand>
        <img
          src={logoecibastas}
          width="100"
          height="auto"
          class="d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggler"
      />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <NavLink onClick={goToDashboard}>
            <img src={houseIcon} width="40" height="auto" />
          </NavLink>
          <NavLink onClick={goToCreateAuction}>
            <img src={auctionIcon} width="40" height="auto" />
          </NavLink>
        </Nav>

        <button className="button-style-navbar" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
