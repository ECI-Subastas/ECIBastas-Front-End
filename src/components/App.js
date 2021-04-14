import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import LandingPage from "./SigninSignup";
import AuctionDashboard from "./AuctionDashboard";
import CreateNewAuction from "./CreateNewAuction";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <PrivateRoute path="/auction-dashboard" component={AuctionDashboard} />
        <PrivateRoute path="/create-auction" component={CreateNewAuction} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
