import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavLink,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { getCreditByUserId } from "../services/UserAPI";
import logoecibastas from "../images/logoecibastas.png";
import houseIcon from "../images/icons/house-icon.png";
import auctionIcon from "../images/icons/auction-icon.png";
import coinIcon from "../images/icons/coin-icon.png";
import userIcon from "../images/icons/user-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavigationBar.css";

const NavigationBar = (props) => {
  const [credit, setCredit] = useState();
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  getCreditByUserId(localStorage.getItem("userId")).then((res) =>
    setCredit(res)
  );

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
        <h1>{credit}</h1>
        <Navbar.Brand>
          <img src={coinIcon} width="40" height="auto" />
        </Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              borderColor: "transparent",
              backgroundColor: "transparent",
              boxShadow: "rgb(255, 67, 94) 0px 0px 0px 0.2rem",
            }}
          >
            <img src={userIcon} width="40" height="auto" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-right">
            <Dropdown.Item>Item 01</Dropdown.Item>
            <Dropdown.Item>Item 02</Dropdown.Item>
            <Dropdown.Item>Item 03</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
