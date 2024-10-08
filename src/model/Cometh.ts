import { SpaceMapper } from "../mapper/SpaceMapper";
import { AstralObject, AstralObjects } from "./AstralObject";
import { Position } from "./Position";

export enum ComethDirection {
    UP = 'UP',
    DOWN = 'DOWN',
    RIGHT = 'RIGHT',
    LEFT = 'LEFT'
}

export class Cometh extends AstralObject {
    constructor(readonly position: Position, readonly direction: ComethDirection) {
        super();
    }

    buildKey(): string {
        return this.direction + SpaceMapper.SEPARATOR + AstralObjects.COMETH;
    }
}