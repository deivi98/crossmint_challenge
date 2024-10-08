import { DelAstralObjectRequest } from "../dto/DelAstralObjectRequest";
import { GoalResponse } from "../dto/GoalResponse";
import { SetComethRequest } from "../dto/SetComethRequest";
import { SetPolyanetRequest } from "../dto/SetPolyanetRequest";
import { SetSoloonRequest } from "../dto/SetSoloonRequest";
import { RequestFailedException } from "../error/RequestFailedException";
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
        try {
            return await this.apiClient.get<GoalResponse>(`map/${this.CANDIDATE_ID}/goal`);
        } catch (err) {
            throw new RequestFailedException('Failed to fetch goal megaverse', err);
        }
    }
    
    async setPolyanet(request: SetPolyanetRequest): Promise<void> {
        try {
            await this.apiClient.post(`polyanets`, { candidateId: this.CANDIDATE_ID, ...request })
        } catch (err) {
            throw new RequestFailedException(`Failed to set polyanet at position ${request.row}, ${request.column}`, err);
        }
    }
    
    async setSoloon(request: SetSoloonRequest): Promise<void> {
        try {
            await this.apiClient.post(`soloons`, { candidateId: this.CANDIDATE_ID, ...request });
        } catch (err) {
            throw new RequestFailedException(`Failed to set soloon at position ${request.row}, ${request.column}`, err);
        }
    }
    
    async setCometh(request: SetComethRequest): Promise<void> {
        try {
            await this.apiClient.post(`comeths`, { candidateId: this.CANDIDATE_ID, ...request })
        } catch (err) {
            throw new RequestFailedException(`Failed to set cometh at position ${request.row}, ${request.column}`, err);
        }
    }
    
    async delPolyanet(request: DelAstralObjectRequest): Promise<void> {
        try {
            await this.apiClient.post(`polyanets`, { candidateId: this.CANDIDATE_ID, ...request });
        } catch (err) {
            throw new RequestFailedException(`Failed to remove polyanet at position ${request.row}, ${request.column}`, err);
        }
    }
    
    async delSoloon(request: DelAstralObjectRequest): Promise<void> {
        try {
            await this.apiClient.post(`soloons`, { candidateId: this.CANDIDATE_ID, ...request });
        } catch (err) {
            throw new RequestFailedException(`Failed to remove soloon at position ${request.row}, ${request.column}`, err);
        }
    }

    async delCometh(request: DelAstralObjectRequest): Promise<void> {
        try {
            await this.apiClient.post(`comeths`, { candidateId: this.CANDIDATE_ID, ...request });
        } catch (err) {
            throw new RequestFailedException(`Failed to remove cometh at position ${request.row}, ${request.column}`, err);
        }
    }
}
