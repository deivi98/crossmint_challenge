import { DelAstralObjectRequest } from "../dto/DelAstralObjectRequest";
import { GoalResponse } from "../dto/GoalResponse";
import { SetComethRequest } from "../dto/SetComethRequest";
import { SetPolyanetRequest } from "../dto/SetPolyanetRequest";
import { SetSoloonRequest } from "../dto/SetSoloonRequest";

export interface MegaverseClient {
    fetchGoal(): Promise<GoalResponse>;
    setPolyanet(request: SetPolyanetRequest): Promise<void>;
    setSoloon(request: SetSoloonRequest): Promise<void>;
    setCometh(request: SetComethRequest): Promise<void>;
    delPolyanet(request: DelAstralObjectRequest): Promise<void>;
    delSoloon(request: DelAstralObjectRequest): Promise<void>;
    delCometh(request: DelAstralObjectRequest): Promise<void>;
}