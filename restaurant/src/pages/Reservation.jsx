import React from 'react';
import Layout from "../components/Layout.jsx";
import {Button, Form} from "react-bootstrap";


function Reservation() {
    return (
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Nazwisko do rezerwacji" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Twój email" />
                </Form.Group>

                <Form.Group controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>

                <Form.Group controlId="formTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Potwierdź rezerwację
                </Button>
            </Form>
    );
}

export default Reservation;