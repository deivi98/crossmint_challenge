import dotenv from 'dotenv';
import { MegaverseClientImpl } from './client/MegaverseClientImpl';
import { MegaverseServiceImpl } from './service/MegaverseServiceImpl';
import { Megaverse } from './model/Megaverse';

dotenv.config();

function main(): void {
    let client = new MegaverseClientImpl();
    let service = new MegaverseServiceImpl(client);
    
    try {
        service.pullGoalMegaverse().then(async (megaverse: Megaverse) => {
            service.pushMegaverse(megaverse);
        })
    } catch (err) {
        console.log("Encountered an exception during execution. Stopping program");
        throw err;
    }
  
}

main();