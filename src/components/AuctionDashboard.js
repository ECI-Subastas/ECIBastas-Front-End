import React, { useEffect, useState } from "react";
import { getAllProducts } from "./ProductAPI";
import Product from "./Product";
import logoecibastas from "../images/logoecibastas.png";
import { Link, useHistory } from "react-router-dom";
import homelogo from "../images/icons/homeicon.png";
import hammerLogo from "../images/icons/hammer.svg";
import { useAuth } from "../contexts/AuthContext";

const AuctionDashboard = (props) => {
  var [publications, setPublications] = useState([]);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
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
      history.push("/Dashboard");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbg">
        <a className="navbar-brand">
          <img
            src={logoecibastas}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt=""
          />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                class="navbar-brand"
                href="#"
                onClick={() => history.push("/dashboard")}
              >
                <img
                  src={homelogo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt=""
                  onClick={handleDashboard}
                />
              </Link>
            </li>
          </ul>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/create-auction">
                  <img
                    src={hammerLogo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div></div>
          <div>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0 logout"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </form>
        </div>
      </nav>
      <h1>INFORMATION</h1>
      <p>Name: {localStorage.getItem("name")}</p>
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
