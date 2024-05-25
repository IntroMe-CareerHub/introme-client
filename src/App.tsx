import Router from "./components/Router.tsx";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainFrame from "./layouts/MainFrame.tsx";

export default function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            navigate("/sign-in");
        }
    }, [pathname, navigate]);

    return (
        <MainFrame>
            <Router />;
        </MainFrame>
    );
}
