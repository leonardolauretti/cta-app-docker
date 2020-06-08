import axios, { AxiosInstance } from 'axios';

export class RankingService {
    client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env.API_URL,
        });
    }

    async fetchRanking() {
        const response = await this.client.get('ranking');
        return response.data;
    }
}