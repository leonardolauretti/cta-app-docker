import axios, { AxiosInstance } from 'axios';
import {
    SignInData,
    SignUpData,
    ResetPasswordData,
    ForgetPasswordData,
} from './types';

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

interface ResetData {
    token: string;
    password: string;
}

interface RecoverData {
    email: string;
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
        let response = await this.client.post('partner/authenticate', data);
        return response.data;
    }

    async me() {
        const response = await this.client.get('partner/me');
        return response.data;
    }

    async reset(data: ResetData) {
        const response = await this.client.post('auth/reset-password', data);
        return response.data.token;
    }

    async recover(data: RecoverData) {
        const response = await this.client.post('auth/forget-password', data);
        return response.data.token;
    }




    async signIn(data: SignInData): Promise<string> {
        const response = await this.client.post('authenticate', data);
        return response.data.token;
    }

    async signUp(data: SignUpData) {
        const response = await this.client.post('register', data);
        return response.data.token;
    }

    async forgetPassword(data: ForgetPasswordData) {
        const response = await this.client.post('auth/forget-password', data);
        return response.data.token;
    }

    async resetPassword(data: ResetPasswordData) {
        const response = await this.client.post('auth/reset-password', data);
        return response.data.token;
    }
}