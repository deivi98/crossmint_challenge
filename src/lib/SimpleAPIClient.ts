import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import axiosRateLimit, { RateLimitedAxiosInstance } from "axios-rate-limit";
import { EnvStore } from "../utils/EnvStore";
import { RequestFailedException } from "../error/RequestFailedException";

/**
 * Just a simple API client using axios lib.
 * If switching to different lib modifying only this client
 * would be enough
 */
export class SimpleAPIClient {
    private readonly client: RateLimitedAxiosInstance;

    private static config: AxiosRequestConfig = {
        headers: {
          'Accept': 'application/json',
        } as RawAxiosRequestHeaders
    };

    constructor(baseURL: string) {
        // Sets rate limit to client to avoid throttling from megaverse API
        this.client = axiosRateLimit(axios.create({ baseURL }), { maxRequests: 1, perMilliseconds: EnvStore.getOrDefault('MILLISECONDS_PER_REQUEST', 2000) });
    }

    async get<T>(path: string): Promise<T> {
        try {
            const response: AxiosResponse = await this.client.get(`/${path}`, SimpleAPIClient.config);
            return response.data as T;
        } catch (err) {
            throw this.handleError(err);
        }
    }
    
    async post(path: string, body: object): Promise<void> {
        try {
            await this.client.post(`/${path}`, body, SimpleAPIClient.config);
        } catch (err) {
            throw this.handleError(err);
        }
    }
    
    private handleError(err: unknown): RequestFailedException {
        if (!axios.isAxiosError(err)) {
            // Throw internal error
            return new RequestFailedException('Unknown internal app error. Request was not made, debug program', err);
        }

        const error: AxiosError = err as AxiosError;
        
        if (error.response) {
            const status: number = error.response.status;

            if (status >= 500) {
                // Throw external error
                return new RequestFailedException('Megaverse API internal error. Debug program', error);
            }
            
            if (status >= 400) {
                switch (status) {
                    case 401:
                        return new RequestFailedException('Request unauthorized. Ensure you have set CANDIDATE_ID correctly', error);
                    case 404:
                        return new RequestFailedException('Resource not found. Ensure endpoint is set correctly', error);
                    case 429:
                        return new RequestFailedException('Too many requests. Try increasing MILLISECONDS_PER_REQUEST', error);
                    default:
                        return new RequestFailedException('Bad request. Debug program', error);
                }
                
            }
        } else if (error.request) {
            // Throw timeout error
            return new RequestFailedException('No response was received. Timeout. Check connection', error);
        }
        
        // Unknown error
        return new RequestFailedException('Request failed. Unknown reason. Debug program', error);
    }
}