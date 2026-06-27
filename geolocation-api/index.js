// geolocation-api/index.js
const axios = require('axios');
require('dotenv').config();

// Tu clave de OpenWeatherMap
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const city = 'Mexico City';  // Puedes cambiar la ciudad

async function getWeather() {
  try {
    // Verifica que la clave esté configurada
    if (!WEATHER_API_KEY) {
      console.error('❌ Error: No se encontró la clave de API de OpenWeatherMap.');
      console.log('💡 Crea un archivo .env con: WEATHER_API_KEY=tu_clave');
      return;
    }

    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: WEATHER_API_KEY,
        units: 'metric',   // 'metric' para Celsius, 'imperial' para Fahrenheit
        lang: 'es'        // Idioma español
      }
    });

    const data = response.data;
    console.log(`\n🌤️ Clima en ${data.name}, ${data.sys.country}:\n`);
    console.log(`🌡️ Temperatura: ${data.main.temp}°C (sensación: ${data.main.feels_like}°C)`);
    console.log(`📊 Mínima: ${data.main.temp_min}°C | Máxima: ${data.main.temp_max}°C`);
    console.log(`☁️ Descripción: ${data.weather[0].description}`);
    console.log(`💧 Humedad: ${data.main.humidity}%`);
    console.log(`💨 Viento: ${data.wind.speed} m/s`);
    console.log(`🌅 Amanecer: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`);
    console.log(`🌇 Atardecer: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}\n`);

  } catch (error) {
    if (error.response) {
      console.error(`❌ Error ${error.response.status}: ${error.response.statusText}`);
      if (error.response.status === 401) {
        console.log('💡 Verifica que tu API key sea correcta.');
      } else if (error.response.status === 404) {
        console.log(`💡 La ciudad "${city}" no fue encontrada.`);
      }
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

getWeather();