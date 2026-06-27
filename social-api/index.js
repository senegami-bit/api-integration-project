// social-api/index.js
const axios = require('axios');

// Configuración
const API_BASE = 'https://hacker-news.firebaseio.com/v0';
const limit = 5;

async function getTopStories() {
  try {
    // 1. Obtener IDs de las mejores historias
    const idsResponse = await axios.get(`${API_BASE}/topstories.json`);
    const topIds = idsResponse.data.slice(0, limit);

    // 2. Obtener detalles de cada historia
    const stories = await Promise.all(
      topIds.map(async (id) => {
        const storyResponse = await axios.get(`${API_BASE}/item/${id}.json`);
        return storyResponse.data;
      })
    );

    console.log(`\n📰 Top ${limit} historias de Hacker News:\n`);
    stories.forEach((story, index) => {
      console.log(`${index + 1}. ${story.title}`);
      console.log(`   👤 Autor: ${story.by}`);
      console.log(`   👍 ${story.score} puntos | 💬 ${story.descendants || 0} comentarios`);
      console.log(`   🔗 ${story.url || 'https://news.ycombinator.com/item?id=' + story.id}\n`);
    });

  } catch (error) {
    if (error.response) {
      console.error(`❌ Error ${error.response.status}: ${error.response.statusText}`);
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

getTopStories();