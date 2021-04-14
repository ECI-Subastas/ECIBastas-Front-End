import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUserByEmail } from "./UserAPI";

const CreateNewAuction = () => {
  const auctionRef = useRef();
  const history = useHistory();
  const email = localStorage.getItem("userEmail");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    getUserByEmail(email).then((Response) => {
      setUser(Response);
    });
  });

  const createAuctionEvent = async () => {
    try {
        setError("")
        setLoading(true)
      axios.post(
        "https://ecibastas-app.herokuapp.com/subasta/createNewSubasta",
        {
          name: auctionRef.current.value,
          creator: user.user_id,
        }
      );

      history.push("/dashboard");
    } catch (error) {
      setError("Error during auction creation");
    }

    setLoading(false)
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Create New Auction</h2>
          <Form onSubmit={createAuctionEvent}>
            <Form.Group id="name">
              <Form.Label>Auction Name</Form.Label>
              <Form.Control type="text" ref={auctionRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Create Auction
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default CreateNewAuction;
