import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

type CommandData = {
  definition: SlashCommandBuilder;
  callback: (interaction: ChatInputCommandInteraction) => Promise<void>;
};

export default [
  {
    definition: new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Nie cieżko się domyślić co to robi.'),
    async callback(interaction: ChatInputCommandInteraction) {
      const name = interaction.user.username;

      await interaction.reply(`${name}, twoja mama.`);
    },
  },
] satisfies CommandData[];
