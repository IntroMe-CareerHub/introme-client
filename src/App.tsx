import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Router from "./components/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
import MainFrame from "./layouts/MainFrame.tsx";
import { useEffect, useState } from "react";
import { get } from "./modules/HttpClient.tsx";
import SignIn from "./pages/login/SignIn.tsx";
import SignInSuccess from "./pages/login/SignInSuccess.tsx";

interface IntroMeUser {
    id: number;
    email: string;
    name: string;
    picture?: string;
}

export default function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [user, setUser] = useState<IntroMeUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("AccessToken");
                if (token) {
                    const { data } = await get<IntroMeUser>("/api/user?token=" + token);
                    setUser(data);
                } else {
                    navigate("/sign-in");
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
                navigate("/sign-in");
            } finally {
                setLoading(false);
            }
        };

        if (pathname !== "/sign-in" && pathname !== "/login-success") {
            fetchUser();
        } else {
            setLoading(false);
        }
    }, [pathname, navigate]);


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <QueryClientProvider client={queryClient}>
            <Router />
            <ReactQueryDevtools />
        </QueryClientProvider><Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/login-success" element={<SignInSuccess />} />
            <Route
                path="/"
                element={<MainFrame user={user}>
                    <Router />
                </MainFrame>} />
        </Routes>
        </>
    );
}
