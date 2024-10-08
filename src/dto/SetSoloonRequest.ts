import { SoloonColor } from "../model/Soloon";
import { SetAstalObjectRequest } from "./SetAstralObjectRequest";

export interface SetSoloonRequest extends SetAstalObjectRequest {
    readonly color: SoloonColor; 
}