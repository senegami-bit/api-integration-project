// streaming-api/index.js
const axios = require('axios');
require('dotenv').config();

const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const TWITCH_ACCESS_TOKEN = process.env.TWITCH_ACCESS_TOKEN;

if (!TWITCH_CLIENT_ID || !TWITCH_ACCESS_TOKEN) {
  console.error('❌ Error: Faltan TWITCH_CLIENT_ID o TWITCH_ACCESS_TOKEN en .env');
  process.exit(1);
}

async function getLiveStreams() {
  try {
    const response = await axios.get('https://api.twitch.tv/helix/streams', {
      params: {
        first: 5,
        language: 'es'
      },
      headers: {
        'Client-ID': TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${TWITCH_ACCESS_TOKEN}`
      }
    });

    const streams = response.data.data;

    if (!streams || streams.length === 0) {
      console.log('📺 No hay streams en vivo en español ahora mismo.');
      return;
    }

    console.log(`\n📺 Top ${streams.length} streams en español:\n`);
    streams.forEach((stream, i) => {
      console.log(`${i + 1}. ${stream.user_name}`);
      console.log(`   🎮 Juego: ${stream.game_name}`);
      console.log(`   📝 Título: ${stream.title}`);
      console.log(`   👥 Espectadores: ${stream.viewer_count}`);
      console.log(`   🔗 https://twitch.tv/${stream.user_login}\n`);
    });

  } catch (error) {
    if (error.response) {
      console.error(`❌ Error ${error.response.status}: ${error.response.statusText}`);
      if (error.response.status === 401) {
        console.error('💡 Tu Access Token expiró. Genera uno nuevo con curl.');
      }
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

getLiveStreams();