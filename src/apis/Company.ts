import axios, { AxiosInstance } from "axios";
import { CompanyData } from "../types/talent";
import { CompanyCardProps, CompanyProps } from "../types/company";

export class CompanyAPI {
    static instance: AxiosInstance = axios.create({
        baseURL: "/api/v1",
        timeout: 3000,
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    });

    public static async getCompanyTalentInfo(companyId: string | undefined): Promise<CompanyData> {
        const response = await this.instance.get(`/company/talent/${companyId}`);
        return response.data as CompanyData;
    }

    public static async createCompany(company: CompanyProps): Promise<void> {
        await this.instance.post("/add", company);
    }

    public static async fetchCompanies(
        pageParam = 1
    ): Promise<{ data: CompanyCardProps[]; totalPages: number; page: number }> {
        const response = await this.instance.get(`/company`, {
            params: { page: pageParam, size: 12 }
        });

        if (response.status !== 200) {
            throw new Error("에러");
        }

        const data = response.data;

        const totalCountHeader = response.headers["x-total-count"];
        const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
        const totalPages = Math.ceil(totalCount / 12);

        return { data, totalPages, page: pageParam };
    }

    public static async fetchPageInfo(): Promise<{ totalElements: number }> {
        const response = await this.instance.get(`/pageInfo`);
        if (response.status !== 200) {
            throw new Error("에러");
        }
        return response.data;
    }
}
