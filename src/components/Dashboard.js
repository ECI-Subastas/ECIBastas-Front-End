import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Dashboard.css";
import logoecibastas from "../images/logoecibastas.png";
import homelogo from "../images/icons/homeicon.png";
import axios from "axios";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [publications, setPublications] = useState("");
  const [loading, setLoading] = useState(false);

  async function subastasInfo() {
    try {
      setError("");
      setLoading(true);
      axios
        .get("https://ecibastas-app.herokuapp.com/subastas")
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          setPublications(response.data);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });

      if (publications.lenght > 0) {
      const publication = publication.map((index, element) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Text>
                  {element.creator}
                </Card.Text>
                <Button variant="primary">Go to subasta</Button>
              </Card.Body>
            </Card>
          );
        });
      }

      //history.push("/");
    } catch (error) {
      setError("Error during user register.");
    }
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
      history.push("/Dashboard");
    } catch {
      setError("Failed to log out");
    }
  }

  /**
   * <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  */

  /*
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="badge badge-pill bg-danger">1</span>
              <span><i class="fas fa-shopping-cart"></i></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>*/

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

    </>
  );
  useEffect(()=>{subastasInfo()},[])
}

