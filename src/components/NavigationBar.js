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
import cartIcon from "../images/icons/shopping_cart-icon.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavigationBar.css";
import { propTypes } from "react-bootstrap/esm/Image";

const NavigationBar = () => {
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

  const goToMyAuctions = () => {
    setError("");

    try {
      history.push("/my-auctions");
    } catch {
      setError("Fail");
    }
  };

  const goToCreditStore = () => {
    setError("");

    try {
      history.push("/creditStore");
    } catch {
      setError("Fail");
    }
  };

  const goToMyProducts = () => {
    try {
      history.push("/my-products") 
    } catch (error) {
      setError("Fail")
    }
  }

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
          <NavLink onClick={goToMyProducts}>
            <img src={cartIcon} width="40" height="auto" />
          </NavLink>
        </Nav>
        <h1>{credit}</h1>
        <NavLink onClick={goToCreditStore}>
          <img src={coinIcon} width="40" height="auto"/>
        </NavLink>
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
            <Dropdown.ItemText>My user id: {localStorage.getItem("userId")}</Dropdown.ItemText>
            <Dropdown.Item onClick={goToMyAuctions}>Mis Subastas</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Cerrar Sesi??n</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
