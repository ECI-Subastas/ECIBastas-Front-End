import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUserByEmail } from "../services/UserAPI";
import NavigationBar from "./NavigationBar";
import "../css/Card.css";
import swal from "sweetalert";


const CreditStore = () => {
    const creditRef = useRef();
    const email = localStorage.getItem("userEmail");
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(function () {
        getUserByEmail(email).then((Response) => {
                setUser(Response);
        });
    });

    const creditBuyEvent = async () => {
        var id = user.user_id;
        var credits = creditRef.current.value;
        setError("");
        setLoading(true);
        try {
            if(0 <= credits){
                axios
                    .put(
                        `https://ecibastas-app.herokuapp.com/user/sumCredits?userId=${id}&credits=${credits}`
                    )
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(`Error: ${error}`);
                    });
            } else {
                swal({
                    title: "Compra",
                    icon: "error",
                    text: "Error, Valor de creditos no valido",
                    timer: "5000",
                });
            }
            
        } catch (error) {
            setError("Error during buy credits");
        }

        setLoading(false);
    };

    return (
        <>
            <NavigationBar />
            <Container fluid>
                <div className="mt-4" />
                <Row className="justify-content-center">
                <Card style={{ width: "40em" }} className="card-style">
                <Card.Body>
                    <div className="mt-4" />
                    <Form onSubmit={creditBuyEvent}>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Credits:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="number"
                                    placeholder="Creditos a comprar"
                                    ref={creditRef}
                                    required
                                />
                            </Col>
                        </Form.Group>
                        <Button type="submit">Comprar Creditos</Button>
                    </Form>
                </Card.Body>
            </Card>
            </Row>
            </Container>
        </>
    );
};

export default CreditStore;
