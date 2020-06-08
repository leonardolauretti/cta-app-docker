import axios, { AxiosInstance } from 'axios';

interface RegisterData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

interface AuthenticateData {
    email: string;
    password: string;
}

interface RecoverPasswordData {
    email: string;
    reset_url?: string;
}

interface ResetPasswordData {
    token: string;
    password: string;
}

export class AuthService {
    client: AxiosInstance;

    constructor(bearer?: string) {
        this.client = axios.create({
            baseURL: process.env.API_URL,
            headers: { Authorization: `Bearer ${bearer}` },
        });
    }

    async register(data: RegisterData) {
        const response = await this.client.post('partner/register', data);
        return response.data;
    }

    async authenticate(data: AuthenticateData) {
        const response = await this.client.post('partner/authenticate', data);
        return response.data;
    }

    async recover(data: RecoverPasswordData) {
        const response = await this.client.post('partner/recover', data);
        return response.data;
    }

    async reset(data: ResetPasswordData) {
        const response = await this.client.post('partner/reset', data);
        return response.data;
    }

    async me() {
        const response = await this.client.get('partner/me');
        return response.data;
    }
}