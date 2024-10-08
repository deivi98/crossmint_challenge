declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      MEGAVERSE_API_URL: string;
      CANDIDATE_ID: string;
      MILLISECONDS_PER_REQUEST: number;
    }
  }
}

export {};