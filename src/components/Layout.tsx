import { Outlet } from "react-router-dom";
import { ScrollProvider } from "../contexts/ScrollContext";
import Header from "./Header";

export default function Layout() {
    return (
        <ScrollProvider>
            <Header />
            <Outlet />
        </ScrollProvider>
    );
}
