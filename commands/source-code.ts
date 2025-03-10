import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
} from 'discord.js';
import type { CommandData } from '.';

export default {
  definition: new SlashCommandBuilder()
    .setName('source-code')
    .setDescription('Zwraca link do kodu źródłowego AWESOM-O.'),
  async callback(interaction) {
    const REPO_URL = 'https://github.com/krystianotto/AWESOM-O';
    const FAKE_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    const goodLink = new ButtonBuilder()
      .setLabel('GitHub')
      .setURL(REPO_URL)
      .setStyle(ButtonStyle.Link);

    const fakeLink = new ButtonBuilder()
      .setLabel('GitHub')
      .setURL(FAKE_URL)
      .setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      goodLink,
      fakeLink,
    );

    await interaction.reply({
      components: [row],
    });
  },
} satisfies CommandData;
