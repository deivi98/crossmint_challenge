import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export class SimpleAPIClient {
    private readonly client: AxiosInstance;

    private static config: AxiosRequestConfig = {
        headers: {
          'Accept': 'application/json',
        } as RawAxiosRequestHeaders
    };

    constructor(baseURL: string) {
        this.client = axios.create({ baseURL });
    }

    async get<T>(path: string): Promise<T> {
        const response: AxiosResponse = await this.client.get(`/${path}`, SimpleAPIClient.config);
        return response.data as T;
    }
    
    async post(path: string, body: object): Promise<void> {
        await this.client.post(`/${path}`, body, SimpleAPIClient.config);
    }
}