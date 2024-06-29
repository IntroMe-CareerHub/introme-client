export interface CompanyInfo {
    location: string;
    url: string;
    recruitUrl: string;
    techBlog: string;
}

export interface Talent {
    id: number;
    keyword: string;
    description: string;
    icon: string;
    permission: string;
    baseUrl: string;
}

export interface CompanyData {
    name: string;
    image: string;
    identityColor: string;
    companyInfo: CompanyInfo;
    updatedAt: string;
    talents: Talent[];
}

export interface TalentBannerProps {
    companyData: CompanyData;
}

export interface TalentIconSliderProps {
    talents: { icon: string }[];
}

export interface TalentContentsProps {
    talentData: Talent[];
}

export type NavigationLinksBtnProps = {
    text: string;
    isBlue?: boolean;
    url?: string | null;
};
