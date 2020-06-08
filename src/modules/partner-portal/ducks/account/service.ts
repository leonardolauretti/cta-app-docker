import axios, { AxiosInstance } from 'axios';

interface UpdateAddressData {
    postal_code: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
}

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

export class AccountService {
    client: AxiosInstance;

    constructor(bearer?: string) {
        this.client = axios.create({
            baseURL: process.env.API_URL,
            headers: { Authorization: `Bearer ${bearer}` },
        });
    }

    async uploadAvatar(file: File) {
        const data = new FormData();
        data.append('file', file);

        const response = await this.client.post('partner/profile/avatar', data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    }

    async deleteAvatar() {
        const response = await this.client.delete('partner/profile/avatar');
        return response.data;
    }

    async changePassword(current_password: string, new_password: string) {
        const response = await this.client.post('partner/password', {
            current_password,
            new_password,
        });
        return response.data;
    }

    async fetchAddress() {
        const response = await this.client.get('partner/profile/address');
        return response.data;
    }

    async updateAddress(data: UpdateAddressData) {
        const response = await this.client.post('partner/profile/address', data);
        return response.data;
    }

    async fetchCompanies() {
        const response = await this.client.get('partner/companies');
        return response.data;
    }

    async createCompany(data: CreateCompanyData) {
        const response = await this.client.post('partner/companies', data);
        return response.data;
    }

    async updateCompany(data: UpdateCompanyData) {}

    async deleteCompany(id: string) {}

    async fetchProfile() {
        const response = await this.client.get('partner/me');
        return response.data;
    }

    async preloadAddress(postal_code: string) {
        const response = await this.client.get(`partner/address/preload/${postal_code}`);
        return response.data;
    }

}