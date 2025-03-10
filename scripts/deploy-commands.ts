import { REST, Routes } from 'discord.js';
import commands from '../commands';

const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN!);

/**
 * Deploys commands to the Discord API.
 * If successful, accessible via (/) command in Discord.
 * @example `bun run scripts/deploy-commands.ts`
 */
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`,
    );

    const commandsDefinition = commands.map(({ definition }) =>
      definition.toJSON(),
    );

    const data = (await rest.put(
      Routes.applicationGuildCommands(
        process.env.DISCORD_APPLICATION_ID!,
        process.env.DISCORD_GUILD_ID!,
      ),
      { body: commandsDefinition },
    )) as unknown as object[];

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`,
    );
  } catch (error) {
    console.error(error);
  }
})();
