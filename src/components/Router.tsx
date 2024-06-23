import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import SpellCheck from "../pages/check/SpellCheck";
import Layout from "../layouts/Layout.tsx";
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/check" element={<SpellCheck />} />
            </Route>
        </Routes>
    );
}
