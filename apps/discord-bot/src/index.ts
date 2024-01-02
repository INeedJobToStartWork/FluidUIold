import { envVariables } from "./utils";
import { Client, Events, GatewayIntentBits } from "discord.js";

// create a new client instance

const client = new Client<boolean>({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient: Client<true>) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  console.log(`${readyClient.user.verified} is ready!`);
});

client.login(envVariables.DISCORD_TOKEN);
