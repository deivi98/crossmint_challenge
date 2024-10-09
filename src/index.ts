import dotenv from 'dotenv';
import { MegaverseClientImpl } from './client/MegaverseClientImpl';
import { MegaverseServiceImpl } from './service/MegaverseServiceImpl';
import { Megaverse } from './model/Megaverse';
import { BaseException } from './error/BaseExcception';

dotenv.config(); // Loads env variables

(async () => {
    let client = new MegaverseClientImpl();
    let service = new MegaverseServiceImpl(client);

    try {
        const megaverse: Megaverse = await service.pullGoalMegaverse();
        await service.pushMegaverse(megaverse);
    } catch (err) {
        if (err instanceof BaseException) {
            console.log(`[ERROR] ${err.message}`);
            process.exit(1);
        } else {
            console.log("Encountered an unknown exception during execution. Stopping program");
            throw err;
        }
    }
})();
