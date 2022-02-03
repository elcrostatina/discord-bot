import { Client, Intents } from 'discord.js';

export class DiscordProvider {
  private static client: Client;

  public static getClient(): Client {
    if (!DiscordProvider.client) {
      DiscordProvider.initializeClient();
    }

    return DiscordProvider.client;
  }

  private static initializeClient(): void {
    DiscordProvider.client = new Client({
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
      ],
    });
  }
}
