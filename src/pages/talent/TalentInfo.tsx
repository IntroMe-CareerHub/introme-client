import TalentBanner from "../../components/talent/TalentBanner.tsx";
import TalentContents from "../../components/talent/TalentContents.tsx";
import TalentFooter from "../../components/talent/TalentFooter.tsx";
import { useEffect, useState } from "react";
import { CompanyAPI } from "../../apis/Company.ts";
import { CompanyData } from "../../types/talent";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TalentInfo() {
    const [companyData, setCompanyData] = useState<CompanyData | null>(null);
    const { companyId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const data = await CompanyAPI.getCompanyTalentInfo(companyId);
                console.log("data:", data);
                setCompanyData(data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error("Axios Error:", error);
                } else {
                    console.error("Error:", error);
                }
            }
        })();
    }, [companyId]);

    // TODO: Skeleton UI 적용
    if (!companyData) return <div></div>;

    return (
        <div>
            <TalentBanner companyData={companyData} />
            <TalentContents talentData={companyData.talents} />
            <TalentFooter />
        </div>
    );
}
