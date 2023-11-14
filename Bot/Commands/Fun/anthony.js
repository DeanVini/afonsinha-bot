import 'dotenv/config';
import axios from 'axios';

export function slashAnthony(client){
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === 'anthony') {
            randomIdolReq();
        }
    });
}

async function randomIdolReq(){
    axios.get("https://k-pop.p.rapidapi.com/idols/random", {
        headers:{
            'X-RapidAPI-Key': 'a56c76275bmsh2046ff924bdda68p15e860jsn805ce82b43c8',
            'X-RapidAPI-Host': 'k-pop.p.rapidapi.com'
        }
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
}