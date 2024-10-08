import { MegaverseRequest } from "./MegaverseRequest";

export interface SetAstalObjectRequest extends MegaverseRequest {
    readonly row: string;
    readonly column: string;
}