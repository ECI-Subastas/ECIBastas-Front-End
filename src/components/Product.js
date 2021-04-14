import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
    const history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    var precio=props.actualprice;


    const enterToPujarEvent = () => {
        try {
            setError("");
            setLoading(true);
            precio = precio+5
            axios
                .post("http://localhost:8080/product/changePriceInitial?product=postman&price={precio}")
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(`Error: ${error}`);
                });

        } catch (error) {
            setError("Error during user register.");
        }

        setLoading(false);
    };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>NAME: {props.name}</Card.Title>
        <Card.Text>AUCTION ID: {props.subasta}</Card.Text>
        <Card.Text>DESCRIPTION: {props.description}</Card.Text>
        <Card.Text>INITIAL PRICE: {props.initialprice}</Card.Text>
        <Card.Text>ACTUAL PRICE: {props.actualprice}</Card.Text>
          <Button variant="primary" onClick={enterToPujarEvent}>
              Pujar 5 Creditos
          </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;