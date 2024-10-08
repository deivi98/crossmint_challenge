import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export interface GoalResponse {
    goal: Array<Array<string>>;
}

export class MegaverseClient {
    private readonly CANDIDATE_ID: string;
    private readonly httpClient: AxiosInstance;

    constructor() {
        this.httpClient = axios.create({
            baseURL: process.env.MEGAVERSE_API_URL,
        });
        this.CANDIDATE_ID = process.env.CANDIDATE_ID;
    }
    
    private async get<T>(path: string): Promise<T> {
        const config: AxiosRequestConfig = {
            headers: {
              'Accept': 'application/json',
            } as RawAxiosRequestHeaders
        };
        
        try {
            const response: AxiosResponse = await this.httpClient.get(`/${path}`, config);
            return response.data as T;
        } catch(err) {
            console.log(err);
            throw err;
        }  
    }
    
    private async post(path: string, body: object): Promise<void> {
        const config: AxiosRequestConfig = {
            headers: {
              'Accept': 'application/json',
            } as RawAxiosRequestHeaders
        };

        try {
            const response: AxiosResponse = await this.httpClient.post(`/${path}`, body, config);
            console.log(response.status);
            console.log(response.data.json);    
        } catch(err) {
            console.log(err);
        }  
    }
    
    async fetchGoal(): Promise<GoalResponse> {
        return await this.get<GoalResponse>(`map/${this.CANDIDATE_ID}/goal`);
    }
    
    async createPolyanet(row: number, column: number) {
        await this.post('polyanets', { row, column, candidateId: this.CANDIDATE_ID })
    }
}