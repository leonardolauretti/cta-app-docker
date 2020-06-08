import axios, { AxiosInstance } from 'axios';

export class InfoService {
    client: AxiosInstance;

    constructor(bearer?: string) {
        this.client = axios.create({
            baseURL: process.env.API_URL,
            headers: { Authorization: `Bearer ${bearer}` },
        });
    }

    async fetchNews() {
        const response = await axios.get('https://www.ctaeletronica.com.br/wp-json/wp/v2/posts?categories=114');
        return response.data;
    }

    async fetchStatus() {
        const response = await this.client.get('partner/status');
        return response.data;
    }
}