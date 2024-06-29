export interface Talent {
    id?: number;
    keyword: string;
    description: string;
    icon?: string;
    permission?: string;
    baseUrl: string;
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

export interface PageInfo {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
}

export interface CompanyListResponse {
    data: CompanyCardProps[];
    pageInfo: PageInfo;
}

export interface CompanyProps {
    id?: number;
    name: string;
    image: string;
    identityColor?: string;
    companyInfo: CompanyInfo;
    updatedAt?: string;
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
    companyData: CompanyProps;
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

export interface TalentInputFieldProps {
    id: string;
    label: string;
    required: boolean;
    placeholder: string;
    maxLength: number;
    value: string;
    onChange?: (name: string, value: string, context?: string) => void;
    readOnly?: boolean;
}
