import HomePage from "./pages/HomePage.jsx";
import Menu from "./pages/Menu.jsx";
import Reservation from "./pages/Reservation.jsx";
import Contact from "./pages/Contact.jsx";

export const routes = [
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
];