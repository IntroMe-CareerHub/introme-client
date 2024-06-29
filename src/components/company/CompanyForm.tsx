/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyProps, Talent } from "../../types/company";
import CompanyInput from "./CompanyInput";
import CompanyTalentInput from "./CompanyTalentInput";
import { CompanyAPI } from "../../apis/Company";

export default function CompanyForm() {
    const navigate = useNavigate();
    const [company, setCompany] = useState<CompanyProps>({
        name: "",
        image: "이미지.png",
        companyInfo: {
            location: "",
            url: "",
            recruitUrl: "",
            techBlog: ""
        },
        talents: [{ id: 1, keyword: "", description: "", baseUrl: "" }]
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await CompanyAPI.createCompany(company);
            navigate("/company/list");
        } catch (error: any) {
            console.error("Error:", error);
        }
    };

    const handleChange = (name: string, value: string, context?: string) => {
        if (context === "companyInfo") {
            setCompany(prev => ({
                ...prev,
                companyInfo: {
                    ...prev.companyInfo,
                    [name]: value
                }
            }));
        } else {
            setCompany(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleTalentChange = (index: number, field: string, value: string) => {
        const updatedTalents = company.talents.map((talent, idx) => {
            if (idx === index) {
                return { ...talent, [field]: value };
            }
            return talent;
        });
        setCompany(prev => ({ ...prev, talents: updatedTalents }));
    };

    const handleAddTalent = () => {
        const newTalent: Talent = {
            id: company.talents.length + 1,
            keyword: "",
            description: "",
            baseUrl: ""
        };
        setCompany(prev => ({ ...prev, talents: [...prev.talents, newTalent] }));
    };

    const handleRemoveTalent = (id: number | undefined) => {
        const filteredTalents = company.talents.filter(talent => talent.id !== id);
        setCompany(prev => ({ ...prev, talents: filteredTalents }));
    };
    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="relative">
                <CompanyInput
                    id="companyName"
                    name="name"
                    label="기업명"
                    required={true}
                    placeholder="인트로미"
                    maxLength={20}
                    value={company.name}
                    onChange={handleChange}
                />
                <span className="absolute top-0 right-0 text-[#EA3323] text-xs">*필수</span>
            </div>
            <CompanyInput
                id="companyAddress"
                name="location"
                label="기업 주소"
                required={true}
                placeholder="예시) 서울특별시 강남구"
                maxLength={20}
                value={company.companyInfo.location}
                onChange={handleChange}
                context="companyInfo"
            />
            <CompanyInput
                id="companyWebsite"
                name="url"
                label="웹사이트 주소"
                required={true}
                placeholder="www.introme.com"
                maxLength={70}
                value={company.companyInfo.url}
                onChange={handleChange}
                context="companyInfo"
            />
            <CompanyInput
                id="companyEmployment"
                name="recruitUrl"
                label="채용사이트 주소"
                required={false}
                placeholder="www.introme.com"
                maxLength={70}
                value={company.companyInfo.recruitUrl}
                onChange={handleChange}
                context="companyInfo"
            />
            <CompanyInput
                id="companyBlog"
                name="techBlog"
                label="테크블로그 주소"
                required={false}
                placeholder="www.introme.com"
                maxLength={70}
                value={company.companyInfo.techBlog}
                onChange={handleChange}
                context="companyInfo"
            />
            <div>
                <div className="flex flex-col justify-between ">
                    <label htmlFor="companyTalent" className="block font-GmarketSansBold text-xl">
                        기업 인재상
                        <span className="text-[#EA3323] font-GmarketSansMedium text-xs ml-2">
                            *
                        </span>
                    </label>
                    <div className="text-xs text-[#464646] font-GmarketSansLight my-1">
                        <span>1. 기업 인재상 1개 이상 필수로 작성해주세요. </span>
                        <br />
                        <span>2. 해당 기업의 인재상을 확인할 수 있는 url을 첨부해주세요.</span>
                    </div>
                </div>
                {company.talents.map((talent, index) => (
                    <CompanyTalentInput
                        key={talent.id}
                        index={index}
                        talent={talent}
                        handleTalentChange={handleTalentChange}
                        handleRemoveTalent={handleRemoveTalent}
                    />
                ))}
                <button
                    type="button"
                    className="text-xs max-w-lg w-full bg-[#F1F3F5] text-[#828282] rounded-lg mt-2"
                    onClick={handleAddTalent}
                >
                    +
                </button>
            </div>
            <button
                type="submit"
                className="text-white bg-[#0085FF] px-6 py-2 rounded-lg ml-auto flex"
            >
                제출 하기
            </button>
        </form>
    );
}
