import React, { useState } from "react"
import { Navbar } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
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
    <Navbar bg="light">
      <Navbar.Brand>Brand Link</Navbar.Brand>
    </Navbar>
  )
}