import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import LandingPage from "./SigninSignup"

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
      </Switch>
    </AuthProvider>
  )
}

export default App