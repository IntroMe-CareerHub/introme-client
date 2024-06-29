import TalentBanner from "../../components/talent/TalentBanner.tsx";
import TalentContents from "../../components/talent/TalentContents.tsx";
import TalentFooter from "../../components/talent/TalentFooter.tsx";
import { useEffect, useState } from "react";
import { CompanyAPI } from "../../apis/Company.ts";
import { CompanyProps } from "../../types/company";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading.tsx";
import axios from "axios";

export default function TalentInfo() {
    const [companyData, setCompanyData] = useState<CompanyProps | null>(null);
    const { companyId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const data = await CompanyAPI.getCompanyTalentInfo(companyId);
                console.log("data:", data);
                setCompanyData(data);
                window.scrollTo(0, 0);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error("Axios Error:", error);
                } else {
                    console.error("Error:", error);
                }
            }
        })();
    }, [companyId]);

    // TODO: Skeleton UI 적용 (임시 로딩)
    if (!companyData) return <Loading />;

    return (
        <div>
            <TalentBanner companyData={companyData} />
            <TalentContents talentData={companyData.talents} />
            <TalentFooter />
        </div>
    );
}
