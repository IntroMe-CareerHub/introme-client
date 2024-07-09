import { Route, Routes } from "react-router-dom";
import Router from "./components/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
import MainFrame from "./layouts/MainFrame.tsx";
import SignIn from "./pages/login/SignIn.tsx";
import SignInSuccess from "./pages/login/SignInSuccess.tsx";

import { UserProvider } from "./contexts/UserContext.tsx";

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <Routes>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/login-success" element={<SignInSuccess />} />
                    <Route
                        path="/"
                        element={
                            <MainFrame>
                                <Router />
                            </MainFrame>
                        }
                    />
                </Routes>
                <ReactQueryDevtools />
            </UserProvider>
        </QueryClientProvider>
    );
}
