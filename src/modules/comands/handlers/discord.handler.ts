import { botProvider } from '../../../common/factories/bot/bot.factory';
import { BotProvider } from '../../../common/enums/bot-provider.enum';
import { DiscordClient } from '../../../common/types/bot.type';
import { BotPrefix } from '../../../common/enums/bot-prefix.enum';

export class DiscordHandler {
  private client: DiscordClient;

  constructor() {
    this.client = botProvider(BotProvider.Discord);
  }

  public async initializeConnection(): Promise<void> {
    try {
      await this.client.login(process.env.DISCOR_SECRET_KEY);

      this.client.on('ready', () => {
        console.log(`Logged in as ${this.client.user}!`);
      });

      this.listenMessage();
    } catch (e) {
      console.log('Connection Error: ', e);
    }
  }

  private listenMessage(): void {
    this.client.on('messageCreate', (message) => {
      if (
        !message.content.startsWith(BotPrefix.Discord) ||
        message.author.bot
      ) {
        return;
      }

      const arg = message.content.slice(BotPrefix.Discord.length).split(/ +/);
      const command = arg?.shift()?.toLowerCase();

      this.handleCommand(command);
    });
  }

  private handleCommand(command: string): void {
    console.log(command);
    // @todo implement a handler
  }
}
