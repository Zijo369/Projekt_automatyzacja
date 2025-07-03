const { Client, GatewayIntentBits } = require('discord.js');
const { sendToN8N } = require('./utils/n8nclient');
require('dotenv').config();

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

client.once('ready', () => {
    console.log(`✅ Bot ${client.user.tag} jest online!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    
    const prefix = '!chat';
    if (message.content.startsWith(prefix)) {
        try {
            await message.channel.sendTyping();
            
            const userMessage = message.content.replace(prefix, '').trim();
            const messageData = {
                message: userMessage,
                user: message.author.username,
                timestamp: new Date().toISOString()
            };
            
            const response = await sendToN8N(messageData);
            
            if (response && response.reply) {
                await message.reply(response.reply);
            } else {
                await message.reply('❌ Nie otrzymałem odpowiedzi z n8n.');
            }
            
        } catch (error) {
            console.error('❌ Błąd:', error);
            await message.reply('❌ Wystąpił błąd podczas przetwarzania.');
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
