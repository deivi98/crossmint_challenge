import { DelAstralObjectRequest } from "../dto/DelAstralObjectRequest";
import { GoalResponse } from "../dto/GoalResponse";
import { SetComethRequest } from "../dto/SetComethRequest";
import { SetPolyanetRequest } from "../dto/SetPolyanetRequest";
import { SetSoloonRequest } from "../dto/SetSoloonRequest";
import { SimpleAPIClient } from "../lib/SimpleAPIClient";
import { EnvStore } from "../utils/EnvStore";
import { MegaverseClient } from "./MegaverseClient";

/**
 * Megaverse API client example implementation
 * It needs CANDIDATE_ID and it uses simple api client
 * just for the purpose of this challenge
 */
export class MegaverseClientImpl implements MegaverseClient {
    private readonly CANDIDATE_ID: string;
    private readonly apiClient: SimpleAPIClient;

    constructor() {
        this.apiClient = new SimpleAPIClient(EnvStore.getOrExit('MEGAVERSE_API_URL'));
        this.CANDIDATE_ID = EnvStore.getOrExit('CANDIDATE_ID');
    }
    
    async fetchGoal(): Promise<GoalResponse> {
        return await this.apiClient.get<GoalResponse>(`map/${this.CANDIDATE_ID}/goal`);
    }
    
    async setPolyanet(request: SetPolyanetRequest): Promise<void> {
        await this.apiClient.post(`polyanets`, { candidateId: this.CANDIDATE_ID, ...request })
        console.log(`Successfully set POLYANET at position ${request.row}, ${request.column} ...`);
    }
    
    async setSoloon(request: SetSoloonRequest): Promise<void> {
        await this.apiClient.post(`soloons`, { candidateId: this.CANDIDATE_ID, ...request });
        console.log(`Successfully set SOLOON (${request.color}) at position ${request.row}, ${request.column} ...`);
    }
    
    async setCometh(request: SetComethRequest): Promise<void> {
        await this.apiClient.post(`comeths`, { candidateId: this.CANDIDATE_ID, ...request })
        console.log(`Successfully set COMETH (${request.direction}) at position ${request.row}, ${request.column} ...`);
    }
    
    async delPolyanet(request: DelAstralObjectRequest): Promise<void> {
        await this.apiClient.post(`polyanets`, { candidateId: this.CANDIDATE_ID, ...request });
    }
    
    async delSoloon(request: DelAstralObjectRequest): Promise<void> {
        await this.apiClient.post(`soloons`, { candidateId: this.CANDIDATE_ID, ...request });
    }

    async delCometh(request: DelAstralObjectRequest): Promise<void> {
        await this.apiClient.post(`comeths`, { candidateId: this.CANDIDATE_ID, ...request });
    }
}
