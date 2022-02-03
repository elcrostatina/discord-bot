import { BotProvider } from '../../enums/bot-provider.enum';
import { DiscordProvider } from '../../providers/discord/discord.provider';

// @todo: define returned type
export const botProvider = (provider: BotProvider): any => {
  switch (provider) {
    case BotProvider.Discord:
      return DiscordProvider.getClient();
  }
};
