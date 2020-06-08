import axios, { AxiosInstance } from 'axios';

export default class InboxService {
    client: AxiosInstance;

    constructor() {
        const API = 'http://localhost:3000/'
        this.client = axios.create({
            baseURL: API,
        });
        console.log(process.env.NODE_ENV);
    }

    async fetchInbox() {
        const response = await this.client.get('partners/inbox');
        const inbox = response.data;
        return inbox;
    }
}