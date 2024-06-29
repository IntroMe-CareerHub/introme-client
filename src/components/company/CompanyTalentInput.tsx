import { Talent } from "../../types/company";

interface CompanyTalentInputProps {
    index: number;
    talent: Talent;
    handleTalentChange: (index: number, field: string, value: string) => void;
    handleRemoveTalent: (id: number | undefined) => void;
}

export default function CompanyTalentInput({
    index,
    talent,
    handleTalentChange,
    handleRemoveTalent
}: CompanyTalentInputProps) {
    const fields = [
        { key: "keyword", label: "키워드", placeholder: "예시) 사회적 책임감", required: true },
        {
            key: "description",
            label: "설명",
            placeholder: "예시) 보다 나은 세상을 만들기 위해 노력합니다.",
            required: true
        },
        { key: "baseUrl", label: "URL", placeholder: "www.introme.com", required: false }
    ];
    return (
        <div className="bg-[#F1F3F5] max-w-lg w-full flex flex-col px-2 py-3 space-y-3 rounded-lg mb-2">
            <div className="flex items-center justify-between">
                <span className="text-xs">{index + 1}번째 인재상</span>
                {index > 0 && (
                    <button
                        type="button"
                        className="text-sm"
                        onClick={() => handleRemoveTalent(talent.id)}
                    >
                        x
                    </button>
                )}
            </div>
            {fields.map(field => (
                <div key={field.key} className="flex items-center">
                    <span className="text-xs absolute text-[#666666] ml-5">{field.label}</span>
                    <input
                        type="text"
                        required={field.required}
                        className="text-xs w-full bg-white rounded-lg py-4 pr-5 pl-20 placeholder:text[#ADB5BD] placeholder:text-xs"
                        placeholder={field.placeholder}
                        maxLength={field.key === "keyword" ? 20 : 100}
                        value={talent[field.key]}
                        onChange={e => handleTalentChange(index, field.key, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
}
