
#  Proyecto de Integración de API

Este repositorio contiene **4 programas independientes** que consumen APIs de diferentes categorías: redes sociales, datos abiertos, geolocalización y transmisión en directo.

Cada programa está diseñado para demostrar el dominio en el consumo de servicios web externos, el manejo de datos asíncronos y la estructuración lógica del código.

---

## 📂 Estructura del Proyecto

```
api-integration-project/
├── .gitignore
├── README.md
├── social-api/           # Redes Sociales (Hacker News)
├── data-api/             # Datos Abiertos (Banco Mundial)
├── geolocation-api/      # Geolocalización (OpenWeatherMap)
└── streaming-api/        # Transmisión en Directo (Twitch)
```

---

## 🚀 Programas Incluidos

### 1. social-api - Hacker News (Redes Sociales)
Obtiene las 5 historias más populares del momento desde **Hacker News**, una comunidad de noticias sobre tecnología y startups.

**Endpoint utilizado:** `https://hacker-news.firebaseio.com/v0/`

**Características:**
- ✅ No requiere clave de API.
- ✅ Muestra título, autor, puntuación y número de comentarios.

---

### 2. data-api - Banco Mundial (Datos Abiertos)
Consulta datos económicos de México desde la **API del Banco Mundial**, incluyendo PIB per cápita y población total.

**Endpoint utilizado:** `http://api.worldbank.org/v2/`

**Características:**
- ✅ No requiere clave de API.
- ✅ Datos oficiales y actualizados.
- ✅ Fácil de modificar para consultar otros países e indicadores.

---

### 3. geolocation-api - OpenWeatherMap (Geolocalización)
Obtiene el clima actual de una ciudad (por defecto **Ciudad de México**) utilizando la API de **OpenWeatherMap**.

**Endpoint utilizado:** `https://api.openweathermap.org/data/2.5/weather`

**Características:**
- ⚠️ Requiere clave de API gratuita.
- ✅ Muestra temperatura, descripción y humedad.
- ✅ Soporta cambio de ciudad y unidades métricas.

---

### 4. streaming-api - Twitch (Transmisión en Directo)
Muestra los **5 streams en vivo más populares en español** utilizando la API de **Twitch Helix**.

**Endpoint utilizado:** `https://api.twitch.tv/helix/streams`

**Características:**
- ⚠️ Requiere `Client-ID` y `Access Token` (gratuitos).
- ✅ Muestra nombre del streamer, juego, título y espectadores.
- ✅ Enlace directo al canal.

---

## 📋 Requisitos Previos

- **Node.js** (v14 o superior) → [Descargar](https://nodejs.org/)
- **npm** (incluido con Node.js)
- **Cuentas gratuitas** para las APIs que lo requieran:
  - OpenWeatherMap → [Registro](https://home.openweathermap.org/users/sign_up)
  - Twitch → [Registro](https://www.twitch.tv/) y [Consola de Desarrolladores](https://dev.twitch.tv/console)

---

## 🔧 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/senegami-bit/api-integration-project.git
cd api-integration-project
```

### 2. Ejecutar cada API por separado

Cada carpeta es un proyecto independiente. Debes instalar las dependencias y ejecutarlo desde su propia carpeta.

#### 📌 social-api (Hacker News)
```bash
cd social-api
npm install
npm start
```
**Salida esperada:**
```
📰 Top 5 historias de Hacker News:
1. Previewing GPT‑5.6 Sol: a next-generation model
   👤 Autor: minimaxir
   👍 792 puntos | 💬 490 comentarios
   🔗 https://openai.com/index/previewing-gpt-5-6-sol/
...
```

---

#### 📌 data-api (Banco Mundial)
```bash
cd data-api
npm install
npm start
```
**Salida esperada:**
```
📊 Datos del Banco Mundial para México:
💰 PIB per cápita (último año): $10,123
📅 Año: 2025
👥 Población total: 128,000,000
🌎 País: Mexico
```

---

#### 📌 geolocation-api (OpenWeatherMap)
```bash
cd geolocation-api
npm install
```

**Configurar clave de API:**
Crea un archivo `.env` dentro de `geolocation-api/` con:
```env
WEATHER_API_KEY=tu_clave_aqui
```

**Ejecutar:**
```bash
npm start
```
**Salida esperada:**
```
🌤️ Clima en Mexico City:
Temperatura: 22.5°C
Descripción: cielo despejado
Humedad: 60%
```

---

#### 📌 streaming-api (Twitch)
```bash
cd streaming-api
npm install
```

**Configurar credenciales:**
Crea un archivo `.env` dentro de `streaming-api/` con:
```env
TWITCH_CLIENT_ID=tu_client_id_aqui
TWITCH_ACCESS_TOKEN=tu_access_token_aqui
```

**Obtener Access Token (App Access Token):**
```bash
curl -X POST 'https://id.twitch.tv/oauth2/token' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'client_id=TU_CLIENT_ID&client_secret=TU_CLIENT_SECRET&grant_type=client_credentials'
```

**Ejecutar:**
```bash
npm start
```
**Salida esperada:**
```
📺 Streams en vivo (Top 5 en español):
1. auronplay
   🎮 Juego: Just Chatting
   📝 Título: Hablando con vosotros
   👥 Espectadores: 45,678
   🔗 https://twitch.tv/auronplay
...
```

---

## 🔐 Variables de Entorno (`.env`)

Los proyectos que requieren claves de API utilizan un archivo `.env` para almacenarlas de forma segura. **Este archivo no debe subirse al repositorio** (está en `.gitignore`).

| Proyecto | Variable | Descripción |
|----------|----------|-------------|
| `geolocation-api` | `WEATHER_API_KEY` | Clave de OpenWeatherMap |
| `streaming-api` | `TWITCH_CLIENT_ID` | Client ID de Twitch |
| `streaming-api` | `TWITCH_ACCESS_TOKEN` | Access Token de Twitch |

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución JavaScript
- **axios** - Cliente HTTP para peticiones a APIs
- **dotenv** - Gestión de variables de entorno
- **APIs:** Hacker News, Banco Mundial, OpenWeatherMap, Twitch

---

## 📚 Documentación de las APIs

| API | Documentación |
|-----|---------------|
| Hacker News | [Firebase API](https://github.com/HackerNews/API) |
| Banco Mundial | [World Bank API](https://datahelpdesk.worldbank.org/knowledgebase/topics/125589) |
| OpenWeatherMap | [OpenWeather API Docs](https://openweathermap.org/current) |
| Twitch | [Twitch API Docs](https://dev.twitch.tv/docs/api/) |

---

## 📌 Notas Importantes

- **Hacker News y Banco Mundial** no requieren clave de API.
- **OpenWeatherMap y Twitch** requieren registro gratuito.
- Las claves de API de OpenWeatherMap pueden tardar hasta **2 horas** en activarse después del registro.
- El token de Twitch expira periódicamente; si obtienes un error `401`, genera uno nuevo.

---

## 🤝 Contribuciones

Este proyecto fue desarrollado como parte de un ejercicio académico para demostrar habilidades en integración de API. Si deseas mejorar o ampliar el proyecto, siéntete libre de hacer un fork y enviar un pull request.

---

## 👤 Autor

**Tu Nombre**  
[GitHub](https://github.com/senegami-bit)

---

## 📄 Licencia

Este proyecto es de uso educativo y no tiene licencia comercial.
```

---

## ✅ Verificación rápida

Antes de subir, asegúrate de que:
- El archivo se llama `README.md` (mayúsculas en `.MD`).
- Está en la raíz del repositorio (`C:\Users\uriel\api-integration-project\README.md`).

---

## 📤 Subir al repositorio

```bash
cd C:\Users\uriel\api-integration-project
git add README.md
git commit -m "Agregado README.md completo con instrucciones para todas las APIs"
git push
```

