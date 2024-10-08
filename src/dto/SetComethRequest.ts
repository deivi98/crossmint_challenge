import { ComethDirection } from "../model/Cometh";
import { SetAstalObjectRequest } from "./SetAstralObjectRequest";

export interface SetComethRequest extends SetAstalObjectRequest {
    readonly direction: ComethDirection; 
}