import "./App.css";
import { Route, Routes } from "react-router-dom";
import SpellCheck from "./pages/check/SpellCheck.tsx";

export default function App() {
    return (
        <Routes>
            <Route path="/check" element={<SpellCheck />} />
        </Routes>
    );
}
