import axios, { AxiosInstance } from 'axios';

interface CreateCompanyData {
    company_name: string;
    trading_name: string;
    document: string;

    postal_code: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;

    business_email: string;
    business_phone: string;
}

interface UpdateCompanyData {
    company_name: string;
    trading_name: string;
    document: string;

    postal_code: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;

    business_email: string;
    business_phone: string;
}

export class CompanyService {
    client: AxiosInstance;

    constructor(bearer?: string) {
        this.client = axios.create({
            baseURL: process.env.API_URL,
            headers: { Authorization: `Bearer ${bearer}` },
        });
    }

    async fetchCompanies() {
        const response = await this.client.get('partner/companies');
        return response.data;
    }

    async createCompany(data: CreateCompanyData) {
        const response = await this.client.post('partner/companies', data);
        return response.data;
    }

    async updateCompany(id: string, data: UpdateCompanyData) {
        const response = await this.client.post(`partner/companies/${id}`, data);
        return response.data;
    }

    async deleteCompany(id: string) {
        const response = await this.client.delete(`partner/companies/${id}`);
        return response.data;
    }
}