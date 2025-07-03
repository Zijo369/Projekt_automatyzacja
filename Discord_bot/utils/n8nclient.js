const axios = require('axios');

async function sendToN8N(data) {
    try {
        const webhookUrl = process.env.N8N_WEBHOOK_URL;
        
        if (!webhookUrl) {
            throw new Error('N8N_WEBHOOK_URL nie jest ustawiony');
        }
        
        const response = await axios.post(webhookUrl, data, {
            headers: { 'Content-Type': 'application/json' },
            timeout: 30000
        });
        
        return response.data;
        
    } catch (error) {
        console.error('❌ Błąd komunikacji z n8n:', error.message);
        throw error;
    }
}

module.exports = { sendToN8N };
