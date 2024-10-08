import { Position } from "./Position";

export abstract class AstralObject {
    abstract readonly position: Position;
    
    abstract buildKey(): string;
}