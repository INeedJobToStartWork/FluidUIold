import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DISCORD_TOKEN: z.string(),
  PREFIX: z.string()
});

declare global {
  module NodeJS {
    // @ts-expect-error - ProcessEnv is default defined but we want to override it
    export type ProcessEnv = z.infer<typeof envSchema>;
  }
}

export const envVariables = envSchema.parse(process.env);

export default envVariables;
