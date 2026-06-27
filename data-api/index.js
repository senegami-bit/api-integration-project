// data-api/index.js (World Bank)
const axios = require('axios');

// Indicadores: PIB per cápita (NY.GDP.PCAP.CD) y Población (SP.POP.TOTL)
const INDICATORS = {
  GDP: 'NY.GDP.PCAP.CD',
  POPULATION: 'SP.POP.TOTL'
};

// País: México (código MEX), o puedes cambiar a 'USA', 'CHN', etc.
const COUNTRY = 'MEX';

async function getWorldBankData() {
  try {
    // Obtener PIB per cápita
    const gdpResponse = await axios.get(
      `http://api.worldbank.org/v2/country/${COUNTRY}/indicator/${INDICATORS.GDP}?format=json`
    );
    
    // Obtener población
    const popResponse = await axios.get(
      `http://api.worldbank.org/v2/country/${COUNTRY}/indicator/${INDICATORS.POPULATION}?format=json`
    );

    const gdpData = gdpResponse.data[1]?.[0] || null;
    const popData = popResponse.data[1]?.[0] || null;

    console.log('\n📊 Datos del Banco Mundial para México:\n');
    
    if (gdpData) {
      console.log(`💰 PIB per cápita (último año): $${gdpData.value?.toLocaleString() || 'N/A'}`);
      console.log(`📅 Año: ${gdpData.date || 'N/A'}`);
    }
    
    if (popData) {
      console.log(`👥 Población total: ${popData.value?.toLocaleString() || 'N/A'}`);
      console.log(`📅 Año: ${popData.date || 'N/A'}`);
    }

    // Mostrar también el nombre del país
    const countryName = gdpResponse.data[0]?.country?.value || 'México';
    console.log(`\n🌎 País: ${countryName}\n`);

  } catch (error) {
    if (error.response) {
      console.error(`❌ Error ${error.response.status}: ${error.response.statusText}`);
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

getWorldBankData();