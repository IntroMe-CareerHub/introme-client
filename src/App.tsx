import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SpellCheck from "./pages/check/SpellCheck.tsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/check" element={<SpellCheck />} />
        </Routes>
    );
}
