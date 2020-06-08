import axios, { AxiosInstance } from 'axios';

export class RankingService {
    client: AxiosInstance;

    constructor(bearer?: string) {
        this.client = axios.create({
            baseURL: process.env.API_URL,
            headers: { Authorization: `Bearer ${bearer}` },
        });
    }

    async fetchRanking() {
        const response = await this.client.get('partner/ranking');
        return response.data;
    }
}