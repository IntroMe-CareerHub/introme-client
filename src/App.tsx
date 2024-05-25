import Router from "./components/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
const queryClient = new QueryClient();
import { useLocation, useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            navigate("/sign-in");
        }
    }, [pathname, navigate]);


    return (
        <QueryClientProvider client={queryClient}>
            <Router />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
