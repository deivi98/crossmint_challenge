import { AstralObject } from "./AstralObject";
import { Position } from "./Position";

export class Polyanet extends AstralObject {
    static readonly NAME: string = "POLYANET";

    constructor(readonly position: Position) {
        super();
    }

    buildKey(): string {
        return Polyanet.NAME;
    }
}