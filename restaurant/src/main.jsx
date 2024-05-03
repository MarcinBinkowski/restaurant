import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./assets/styles/index.css";
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);