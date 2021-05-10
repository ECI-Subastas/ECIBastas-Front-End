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
import NavigationBar from "./NavigationBar";
import MyAuctionsDashboard from "./MyAuctionsDashboard";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute path="/nav-bar" component={NavigationBar} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <PrivateRoute path="/auction-dashboard" component={AuctionDashboard} />
        <PrivateRoute path="/create-auction" component={CreateNewAuction} />
        <PrivateRoute path="/my-auctions" component={MyAuctionsDashboard} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
