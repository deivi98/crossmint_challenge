import dotenv from 'dotenv';
import { MegaverseClient } from './client/MegaverseClient';

dotenv.config();

function main(): void {
  let client = new MegaverseClient();
  
  client.hola();
}

main();