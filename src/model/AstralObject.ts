import { Position } from "./Position";

export enum AstralObjects {
    POLYANET = 'POLYANET',
    SOLOON = 'SOLOON',
    COMETH = 'COMETH'
}

export abstract class AstralObject {
    abstract readonly position: Position;
    
    abstract buildKey(): string;
}