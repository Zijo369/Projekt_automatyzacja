client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    
    const prefix = '!chat';
    const mentionBot = message.mentions.has(client.user);
    
    if (message.content.startsWith(prefix) || mentionBot) {
        await message.channel.sendTyping();
        // Przetwarzanie wiadomości...
    }
});
