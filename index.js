import { Client, GatewayIntentBits, Message, REST, Routes } from 'discord.js';
import 'dotenv/config'
import { startCommands } from './Bot/startCommands.js';
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const client = new Client({ intents: [GatewayIntentBits.Guilds]})

const commands = [
    {
      name: 'hetero',
      description: 'Quanto que sou hétero',
    },
  ];
  
const rest = new REST({ version: '10' }).setToken('MTE3MjY3MjE4MDMwODQzMDkwMg.Gt1s_1.X0Xwg6IfoX9PRTx63N5njFLRfLQdwFbVmGV7lo');

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

startCommands(client)

client.login('MTE3MjY3MjE4MDMwODQzMDkwMg.Gt1s_1.X0Xwg6IfoX9PRTx63N5njFLRfLQdwFbVmGV7lo');