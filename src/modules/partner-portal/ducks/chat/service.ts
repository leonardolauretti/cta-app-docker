import axios, { AxiosInstance } from 'axios';

export class ChatService {
    client: AxiosInstance;

    constructor(bearer: string) {
        this.client = axios.create({
            baseURL: process.env.API_URL,
            headers: { Authorization: `Bearer ${bearer}` },
        });
    }

    async fetchProfiles() {}

    async fetchChats(profileId: string) {
        let response = await this.client.get(`chat/profiles/${profileId}/chats`);
        return response.data;
    }
}