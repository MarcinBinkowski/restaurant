import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./assets/styles/index.css"
import Layout from "./components/Layout";
import { routes } from "./router";
import {ReactElement} from "react";

interface RouteItem {
    path: string;
    element: ReactElement;
}

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {(routes as RouteItem[]).map((route) => {
                        return (
                            <Route key={route.path} path={route.path} element={route.element} />
                        );
                    })}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;