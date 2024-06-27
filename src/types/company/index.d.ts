export interface Talent {
    id?: number;
    keyword: string;
    description: string;
    baseUrl?: string;
    icon?: string;
    [key: string]: string | undefined | number;
}

export interface CompanyInfo {
    location: string;
    url: string;
    recruitUrl: string;
    techBlog: string;
}

export interface CompanyCardProps {
    id?: number;
    name: string;
    image: string;
    location: string;
    url: string;
    talents: Talent[];
}

export interface CompanyProps {
    id?: number;
    name: string;
    image: string;
    companyInfo: CompanyInfo;
    talents: Talent[];
}

export interface CompanyHeaderProps {
    totalElements: number | undefined;
}

export interface CompanyInputFieldProps {
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

export interface CompanyTalentInputProps {
    index: number;
    talent: Talent;
    handleTalentChange: (index: number, field: string, value: string) => void;
    handleRemoveTalent: (id: number | undefined) => void;
}
