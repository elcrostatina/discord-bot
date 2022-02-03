import 'dotenv/config';
import { DiscordHandler } from './modules/comands/handlers/discord.handler';

const discordHandler = new DiscordHandler();
discordHandler.initializeConnection();
