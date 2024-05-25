import { Outlet } from "react-router-dom";
import { ScrollProvider } from "../contexts/ScrollContext.tsx";
import Header from "../components/Header.tsx";

export default function Layout() {
    return (
        <ScrollProvider>
            <Header />
            <Outlet />
        </ScrollProvider>
    );
}
