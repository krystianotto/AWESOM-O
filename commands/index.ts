import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

import sourceCode from './source-code';
import hello from './hello';
import ping from './ping';

export type CommandData = {
  definition: SlashCommandBuilder;
  callback: (interaction: ChatInputCommandInteraction) => Promise<void>;
};

export default [ping, sourceCode, hello] satisfies CommandData[];
