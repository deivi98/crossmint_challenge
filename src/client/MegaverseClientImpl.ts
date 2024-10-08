import { DelAstralObjectRequest } from "../dto/DelAstralObjectRequest";
import { GoalResponse } from "../dto/GoalResponse";
import { SetComethRequest } from "../dto/SetComethRequest";
import { SetPolyanetRequest } from "../dto/SetPolyanetRequest";
import { SetSoloonRequest } from "../dto/SetSoloonRequest";
import { SimpleAPIClient } from "../lib/SimpleAPIClient";
import { MegaverseClient } from "./MegaverseClient";

export class MegaverseClientImpl implements MegaverseClient {
    private readonly CANDIDATE_ID: string;
    private readonly apiClient: SimpleAPIClient;

    constructor() {
        this.apiClient = new SimpleAPIClient(process.env.MEGAVERSE_API_URL);
        this.CANDIDATE_ID = process.env.CANDIDATE_ID;
    }
    
    async fetchGoal(): Promise<GoalResponse> {
        return await this.apiClient.get<GoalResponse>(`map/${this.CANDIDATE_ID}/goal`);
    }
    
    async setPolyanet(request: SetPolyanetRequest): Promise<void> {
        await this.apiClient.post(`polyanets`, request)
    }
    
    async setSoloon(request: SetSoloonRequest): Promise<void> {
        await this.apiClient.post(`soloons`, request)
    }
    
    async setCometh(request: SetComethRequest): Promise<void> {
        await this.apiClient.post(`comeths`, request)
    }
    
    async delPolyanet(request: DelAstralObjectRequest): Promise<void> {
        await this.apiClient.post(`polyanets`, request);
    }
    
    async delSoloon(request: DelAstralObjectRequest): Promise<void> {
        await this.apiClient.post(`soloons`, request);
    }

    async delCometh(request: DelAstralObjectRequest): Promise<void> {
        await this.apiClient.post(`comeths`, request);
    }
}
