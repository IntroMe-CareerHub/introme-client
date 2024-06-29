import axios, { AxiosInstance } from "axios";
import { Talent, CompanyProps, CompanyListResponse } from "../types/company";

export class CompanyAPI {
    static instance: AxiosInstance = axios.create({
        baseURL: "/api/v1",
        timeout: 3000,
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    });

    public static async getCompanyTalentInfo(companyId: string | undefined): Promise<CompanyProps> {
        if (!companyId) throw new Error("Error");
        const response = await this.instance.get(`/company/talent/${companyId}`);
        if (response.status !== 200) throw new Error("Error");
        return response.data as CompanyProps;
    }

    public static async getCompanyName(companyId: string): Promise<string> {
        const companyData = await this.getCompanyTalentInfo(companyId);
        return companyData.name;
    }

    public static async createCompany(company: CompanyProps): Promise<void> {
        await this.instance.post("/company/submit", company);
    }

    public static async appendCompanyTalent(companyId: number, talent: Talent): Promise<void> {
        await this.instance.post("/company/talent/submit", talent, {
            params: { companyId }
        });
    }

    public static async fetchCompanies(pageParam: number): Promise<CompanyListResponse> {
        try {
            const response = await this.instance.get(`/company/list`, {
                params: { page: pageParam, size: 12 }
            });

            if (response.status !== 200) throw new Error("Error");

            // test code
            console.log(response.data);

            const { data, pageInfo } = response.data;
            return { data, pageInfo };
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }

    // test code
    // public static async fetchCompanies(pageParam: number): Promise<CompanyListResponse> {
    //     const response = await this.instance.get(`/company/list`);
    //     if (response.status !== 200) throw new Error("Error");

    //     console.log(pageParam);

    //     const { data, pageInfo } = response.data;
    //     return { data, pageInfo };
    // }
}
