import { Client, GatewayIntentBits, Message, REST, Routes } from 'discord.js';
import 'dotenv/config'
import { command } from './Commands/commands.js';
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env


export function startCommands(client){
  command.slashHetero(client)
}


