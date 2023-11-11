import { Client, GatewayIntentBits, Message, REST, Routes } from 'discord.js';
import 'dotenv/config';
import { fun } from './Commands/Fun/commands.js';

const { TOKEN, CLIENT_ID } = process.env

const client = new Client({ intents: [GatewayIntentBits.Guilds]})

const commands = [
    {
      name: 'hetero',
      description: 'Quanto que sou hétero',
    },
  ];
  
const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
  
fun.slashHetero(client)

client.login('MTE3MjY3MjE4MDMwODQzMDkwMg.GJiSvC.qBiAhoR57xYm1u4Bq375I6Up7cjHih78O96xzs');
