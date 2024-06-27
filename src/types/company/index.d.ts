export interface Talent {
    id?: number;
    keyword: string;
    description: string;
    icon?: string;
    permission?: string;
    baseUrl?: string;
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

// 기업 및 인재상 제출
export interface CompanyProps {
    id?: number;
    name: string;
    image: string;
    companyInfo: CompanyInfo;
    talents: Talent[];
}

// 기업 인재상 조회
export interface CompanyData {
    name: string;
    image: string;
    identityColor: string;
    companyInfo: CompanyInfo;
    updatedAt: string;
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

export interface TalentBannerProps {
    companyData: CompanyData;
}

export interface TalentIconSliderProps {
    talents: { icon?: string }[];
}

export interface TalentContentsProps {
    talentData: Talent[];
}

export type NavigationLinksBtnProps = {
    text: string;
    isBlue?: boolean;
    url?: string | null;
};
