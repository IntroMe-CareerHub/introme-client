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
