import { AstralObject, AstralObjects } from "./AstralObject";
import { Position } from "./Position";

export class Polyanet extends AstralObject {
    constructor(readonly position: Position) {
        super();
    }

    buildKey(): string {
        return AstralObjects.POLYANET;
    }
}