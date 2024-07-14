import TalentBanner from "../../components/talent/TalentBanner.tsx";
import TalentContents from "../../components/talent/TalentContents.tsx";
import TalentFooter from "../../components/talent/TalentFooter.tsx";
import TalentForm from "../../components/talent/TalentForm.tsx";
import { useEffect, useState } from "react";
import { CompanyAPI } from "../../apis/Company.ts";
import { CompanyProps } from "../../types/company";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading.tsx";
import { IoClose } from "react-icons/io5";
import axios from "axios";

export default function TalentInfo() {
    const [companyData, setCompanyData] = useState<CompanyProps | null>(null);
    const { companyId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <TalentBanner companyData={companyData} onAddTalent={() => setIsModalOpen(true)} />
            <TalentContents talentData={companyData.talents} />
            <TalentFooter />
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white pt-14 pb-10 px-14 rounded-lg relative">
                        <button
                            className="absolute top-4 right-4"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <IoClose size="28" />
                        </button>
                        <TalentForm />
                    </div>
                </div>
            )}
        </div>
    );
}
