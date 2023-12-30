import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DISCORD_TOKEN: z.string(),
  PREFIX: z.string()
});

declare global {
  module NodeJS {
    export interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

export const envVariables = envSchema.parse(process.env);

export default envVariables;
