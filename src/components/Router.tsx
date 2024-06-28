import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main.tsx";
import SpellCheck from "../pages/check/SpellCheck";
import Layout from "./Layout";
import CompanyList from "../pages/company/CompanyList";
import CompanyAdd from "../pages/company/CompanyAdd";
import TalentInfo from "../pages/talent/TalentInfo.tsx";
import TalentForm from "./talent/TalentForm.tsx";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/check" element={<SpellCheck />} />
                <Route path="/company/list" element={<CompanyList />} />
                <Route path="/company/add" element={<CompanyAdd />} />
                <Route path="/company/talent/:companyId" element={<TalentInfo />} />
                <Route path="/company/talent/:companyId/form" element={<TalentForm />} />
            </Route>
        </Routes>
    );
}
