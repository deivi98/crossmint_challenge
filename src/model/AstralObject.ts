import { Megaverse } from "./Megaverse";
import { Position } from "./Position";

export enum AstralObjects {
    POLYANET = 'POLYANET',
    SOLOON = 'SOLOON',
    COMETH = 'COMETH',
    VOID = 'SPACE'
}

export abstract class AstralObject {
    abstract readonly position: Position;
    
    abstract buildKey(): string;
    abstract isValid(megaverse: Megaverse): boolean;
}