import TalentAddInput from "./TalentAddInput.tsx";
import React, { useEffect, useState } from "react";
import { Talent } from "../../types/company";
import { CompanyAPI } from "../../apis/Company.ts";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function TalentForm() {
    const { companyId } = useParams<{ companyId: string }>();
    const [companyName, setCompanyName] = useState<string>("");
    const navigate = useNavigate();
    const [talent, setTalent] = useState<Talent>({
        keyword: "",
        description: "",
        baseUrl: ""
    });

    useEffect(() => {
        (async () => {
            if (companyId) {
                try {
                    const name = await CompanyAPI.getCompanyName(companyId);
                    setCompanyName(name);
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        console.error("Axios Error:", error);
                    } else {
                        console.error("Error:", error);
                    }
                }
            }
        })();
    }, [companyId]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!companyId) {
            console.error("companyId is missing.");
            return;
        }
        try {
            await CompanyAPI.appendCompanyTalent(Number(companyId), talent);
            navigate(`/company/talent/${companyId}`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Axios Error:", error);
            } else {
                console.error("Error:", error);
            }
        }
    };

    const handleTalentChange = (id: string, value: string) => {
        setTalent(prev => ({ ...prev, [id]: value }));
    };

    return (
        <form className="space-y-8 pt-40" onSubmit={handleSubmit}>
            <div className="relative">
                <TalentAddInput
                    id="name"
                    label="기업명"
                    required={false}
                    placeholder="인트로미"
                    maxLength={20}
                    value={companyName}
                    onChange={() => {}}
                    readOnly={true}
                />
            </div>
            <TalentAddInput
                id="keyword"
                label="기업 인재상 키워드"
                required={true}
                placeholder="예시) 사회적 책임감"
                maxLength={20}
                value={talent.keyword}
                onChange={handleTalentChange}
            />
            <TalentAddInput
                id="description"
                label="기업 인재상 설명"
                required={true}
                placeholder="예시) 보다 나은 세상을 만들기 위해 노력합니다."
                maxLength={100}
                value={talent.description}
                onChange={handleTalentChange}
            />
            <TalentAddInput
                id="baseUrl"
                label="기업 인재상 URL"
                required={true}
                placeholder="www.introme.com"
                maxLength={100}
                value={talent.baseUrl}
                onChange={handleTalentChange}
            />
            <button
                type="submit"
                className="text-white bg-[#0085FF] px-6 py-2 rounded-lg ml-auto flex"
            >
                제출하기
            </button>
        </form>
    );
}
