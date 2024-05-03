import {Button} from "react-bootstrap";
import React from "react";
import Navigation from "../pages/Navigation.jsx";

function OrderButton() {
    return(
    <>
        <style type="text/css">
            {`
                .btn-primary {
                    background-color: #f39d03;
                    border: none;
                    color: #2a2a2a;
                    white-space: nowrap;
                }
                .btn-primary:hover {
                background-color: #F0E68C;
                color: black;
            `}
        </style>
        <Button variant="primary">Złóż zamówienie</Button>
    </>
    )}

export default OrderButton;