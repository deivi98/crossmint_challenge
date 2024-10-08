import { Megaverse } from "../model/Megaverse";

/**
 * Megaverse app internal service interface.
 * Defines what actions the app can perform
 */
export interface MegaverseService {
    pullGoalMegaverse(): Promise<Megaverse>;
    pushMegaverse(megaverse: Megaverse): Promise<void>;
}