export class MegaverseClient {
    private readonly API_URL: string = process.env.MEGAVERSE_API_URL;

    hola(): void {
        console.log(this.API_URL);
    }
}