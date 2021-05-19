import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import MyAuctions from "./MyAuctions";
import { getAllUserAuctions } from "../services/AuctionAPI";

const MyAuctionsDashboard = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(function () {
    getAllUserAuctions(localStorage.getItem("userId")).then((res) =>
      setAuctions(res)
    );
  });

  return (
    <>
      <NavigationBar />
      <div className="mt-4" />
      <Container fluid="md">
        <Row className="justify-content-center" lg={5} md={5} sm={3} xs={2}>
          {auctions.map((auction) => (
            <MyAuctions name={auction.name} subastaId={auction.subastaId} creator={auction.creator} isActive={auction.isActive} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyAuctionsDashboard;
