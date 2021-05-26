import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { getAllAuctions } from "../services/AuctionAPI";
import Auction from "./Auction"
import MyAutionProducts from "./MyAuctionProducts";
import NavigationBar from "./NavigationBar";

const MyProductsDashboard = () => {
  const [auctions, setAuctions] = useState([]);
  const [error, setError] = useState("");

  useEffect(function () {
    getAllAuctions().then((res) => setAuctions(res));
  });

  return (
    <>
      <NavigationBar />
      <center><h1 class="display-5">Mis Productos</h1></center>
      <Container fluid="md">
        <div className="mt-4" />
        <Row className="justify-content-center" lg={5} md={5} sm={3} xs={2}>
          {auctions.map((auction) => {
            if (auction.isActive == false && auction.creator!=localStorage.getItem("userId")) {
              return (
                <MyAutionProducts
                  subastaId={auction.subastaId}
                  name={auction.name}
                  creator={auction.creator}
                  isActive={auction.isActive}
                ></MyAutionProducts>
              );
            }
          })}
        </Row>
      </Container>
    </>
  );
};

export default MyProductsDashboard;
