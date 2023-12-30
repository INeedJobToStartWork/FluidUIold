import { envVariables } from "./utils";
import { Client, Events, GatewayIntentBits } from "discord.js";

// Create a new client instance

const client: Client<boolean> = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, (readyClient: Client<true>) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  console.log(`${readyClient.user.verified} is ready!`);
});

const redo = "red";
if ("red" === redo) {
  console.log("red");
}

client.login(envVariables.DISCORD_TOKEN);
