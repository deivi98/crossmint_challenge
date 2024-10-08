import axios, { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import axiosRateLimit, { RateLimitedAxiosInstance } from "axios-rate-limit";

export class SimpleAPIClient {
    private readonly client: RateLimitedAxiosInstance;

    private static config: AxiosRequestConfig = {
        headers: {
          'Accept': 'application/json',
        } as RawAxiosRequestHeaders
    };

    constructor(baseURL: string) {
        // Sets rate limit to client to avoid throttling from megaverse API
        this.client = axiosRateLimit(axios.create({ baseURL }), { maxRequests: 1, perMilliseconds: 1000 });
    }

    async get<T>(path: string): Promise<T> {
        const response: AxiosResponse = await this.client.get(`/${path}`, SimpleAPIClient.config);
        return response.data as T;
    }
    
    async post(path: string, body: object): Promise<void> {
        await this.client.post(`/${path}`, body, SimpleAPIClient.config);
    }
}