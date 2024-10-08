import { AstralObject, AstralObjects } from "./AstralObject";
import { Megaverse } from "./Megaverse";
import { Position } from "./Position";

export class Void extends AstralObject {
    constructor(readonly position: Position) {
        super();
    }

    buildKey(): string {
        return AstralObjects.VOID;
    }
    
    isValid(megaverse: Megaverse): boolean {
        return true;
    }
}