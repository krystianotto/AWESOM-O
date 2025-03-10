import { MessageFlags, SlashCommandBuilder } from 'discord.js';
import type { CommandData } from '.';

export default {
  definition: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('AWESOM-O się przedstawi'),
  async callback(interaction) {
    await interaction.reply({
      content:
        '```md\n Hoł Hoł! Jestem AWESOM-O. Zostałem stworzy, aby robić dobrze! (ʘ ͜ʖ ʘ) \n```',
      flags: MessageFlags.Ephemeral,
    });
  },
} satisfies CommandData;
