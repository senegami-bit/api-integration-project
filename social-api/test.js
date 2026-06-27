const axios = require('axios');

async function testReddit() {
  try {
    const response = await axios.get('https://www.reddit.com/r/all/hot.json', {
      params: { limit: 1 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      }
    });
    console.log('✅ Conexión exitosa. Número de posts:', response.data.data.children.length);
  } catch (error) {
    console.log('❌ Error completo:', error.response?.status, error.response?.data || error.message);
  }
}

testReddit();