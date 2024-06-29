import TalentBanner from "../../components/talent/TalentBanner.tsx";
import TalentContents from "../../components/talent/TalentContents.tsx";
import TalentFooter from "../../components/talent/TalentFooter.tsx";
import { useEffect, useState } from "react";
import { CompanyAPI } from "../../apis/Company.ts";
import { CompanyData } from "../../types/talent";
import { useParams } from "react-router-dom";

export default function TalentInfo() {
    const [companyData, setCompanyData] = useState<CompanyData | null>(null);
    const { companyId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const data = await CompanyAPI.getCompanyTalentInfo(companyId); // TODO: 기업 인재상 리스트 페이지에서 CompanyId 넘겨받기
                setCompanyData(data);
            } catch (error) {
                console.error("Error:", error);
            }
        })();
    }, []);

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
