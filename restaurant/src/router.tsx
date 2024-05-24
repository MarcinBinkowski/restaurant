import { ReactElement } from 'react';
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ReservationPage from "./pages/ReservationPage";
import ContactPage from "./pages/ContactPage";
import MapPage from "./pages/MapPage";

interface Route {
    path: string;
    element: ReactElement;
}

export const routes: Route[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/menu",
        element: <MenuPage />
    },
    {
        path: "/reservation",
        element: <ReservationPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
    {
        path: "/map",
        element: <MapPage />,
    },
];