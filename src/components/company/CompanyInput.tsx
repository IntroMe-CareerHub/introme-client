interface CompanyInputFieldProps {
    id: string;
    name: string;
    label: string;
    required: boolean;
    placeholder: string;
    maxLength: number;
    value: string;
    context?: string;
    onChange: (name: string, value: string, context?: string) => void;
}

export default function CompanyInput({
    id,
    name,
    label,
    required,
    placeholder,
    maxLength,
    value,
    onChange,
    context
}: CompanyInputFieldProps) {
    const showUrlPrefixIds = ["companyWebsite", "companyEmployment", "companyBlog"];

    const showUrlView = showUrlPrefixIds.includes(id);
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <label htmlFor={id} className="block font-GmarketSansBold text-xl">
                    {label}
                    {required && (
                        <span className="text-[#EA3323] font-GmarketSansMedium text-xs ml-2">
                            *
                        </span>
                    )}
                </label>
            </div>
            <div className={`${showUrlView ? "flex items-center" : ""}`}>
                {showUrlView && (
                    <span className="text-xs absolute text-[#666666] ml-5">https://</span>
                )}
                <input
                    id={id}
                    type="text"
                    required={required}
                    className={`text-xs max-w-lg w-full bg-[#F1F3F5] rounded-lg py-4 px-5 placeholder:text[#ADB5BD] placeholder:text-xs ${showUrlView && "pl-20"}`}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    value={value}
                    onChange={e => onChange(name, e.target.value, context)}
                />
            </div>
        </div>
    );
}
