import Router from "./components/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UserProvider } from "./contexts/UserContext.tsx";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <Router />
                <ReactQueryDevtools />
            </UserProvider>
        </QueryClientProvider>
    );
}
