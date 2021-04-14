import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Dashboard.css";
import logoecibastas from "../images/logoecibastas.png";
import homelogo from "../images/icons/homeicon.png";
import hammerLogo from "../images/icons/hammer.svg";
import Auction from "./Auction";
import { getAllAuctions } from "./AuctionAPI";

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
      history.push("/Dashboard");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark navbg">
        <a class="navbar-brand">
          <img
            src={logoecibastas}
            width="100"
            height="70"
            class="d-inline-block align-top"
            alt=""
          />
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link
                class="navbar-brand"
                href="#"
                onClick={() => history.push("/dashboard")}
              >
                <img
                  src={homelogo}
                  width="40"
                  height="40"
                  class="d-inline-block align-top"
                  alt=""
                  onClick={handleDashboard}
                />
              </Link>
            </li>
          </ul>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/create-auction">
                  <img
                    src={hammerLogo}
                    width="40"
                    height="40"
                    class="d-inline-block align-top"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div></div>
          <div>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <form class="form-inline my-2 my-lg-0">
            <button
              class="btn btn-outline-success my-2 my-sm-0 logout"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </form>
        </div>
      </nav>
      <div className="overflow-auto h-auto">
        {publications.map((publication) => (
          <Auction
            subastaId={publication.subastaId}
            name={publication.name}
            creator={publication.creator}
          ></Auction>
        ))}
      </div>
    </>
  );
}
