import { Client, GatewayIntentBits, Message, REST, Routes } from 'discord.js';
import 'dotenv/config';

function slashHetero(client){
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === 'hetero') {
            console.log('entrou')
            const porcentagemHetero = Math.floor(Math.random() * 101);
            console.log(interaction.user.globalName)
            await interaction.reply(`${interaction.user.globalName} é ${porcentagemHetero}% hetero!! ${porcentagemHetero > 50 ? ":muscle:" : ":deer:"}`);
        }
    });
}


export const fun = { slashHetero }

  