import { Megaverse } from "../model/Megaverse";

export interface MegaverseService {
    pullGoalMegaverse(): Promise<Megaverse>;
    pushMegaverse(megaverse: Megaverse): Promise<void>;
}