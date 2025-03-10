import {
  SlashCommandBuilder,
  type ChatInputCommandInteraction,
} from 'discord.js';
import type { CommandData } from '.';
import promises from 'node:timers/promises';

export default {
  definition: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Nie cieżko się domyślić co to robi.'),
  async callback(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();
    await promises.setTimeout(3000);
    await interaction.editReply(`${interaction.user.displayName}, twoja mama!`);
  },
} satisfies CommandData;
