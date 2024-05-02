import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap';
import Menu from "./components/Menu.jsx";
import HomePage from "./components/HomePage.jsx";
import Reservation from "./components/Reservation.jsx";
import Contact from "./components/Contact.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "/reservation",
        element: <Reservation />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;