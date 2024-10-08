import dotenv from 'dotenv';
import { MegaverseClientImpl } from './client/MegaverseClientImpl';
import { MegaverseServiceImpl } from './service/MegaverseServiceImpl';
import { Megaverse } from './model/Megaverse';

dotenv.config(); // Loads env variables

/**
 * Entry function
 */
function main(): void {
    let client = new MegaverseClientImpl();
    let service = new MegaverseServiceImpl(client);
    
    try {
        // First step is to pull and parse goal from Megaverse API
        service.pullGoalMegaverse().then(async (megaverse: Megaverse) => {
            // Then parse it to requests and push it back to API
            service.pushMegaverse(megaverse);
        })
    } catch (err) {
        console.log("Encountered an exception during execution. Stopping program");
        throw err;
    }
  
}

main();