
/**
 * Simple class to read env variables
 * and / or ensure they are set
 */
export class EnvStore {

    public static getOrExit(variable: string): any {
        if (typeof process.env[variable] === 'undefined') {
            console.log(`Env variable ${variable} is not set.`);
            process.exit(1);
        }

        return process.env[variable];
    }
    
    public static getOrDefault(variable: string, defaultValue: any): any {
        return process.env[variable] || defaultValue;
    }
}