
# Text Translation API

This project consists of a text translation API in different languages supported by the DeepL API. The API consumes the free DeepL service to perform text translation, which is interpreted by the translation endpoint to return a response to the frontend with the desired structure.

## Prerequisites

- Node.js v20.10 or higher
- Free DeepL account (to obtain the API key)

## Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/Keiner28/Google-Translate-Backend.git
```

2. Navigate to the project directory:

```
cd Google-Translate-Backend
```

3. Install the project dependencies:

```
npm install
```

4. Create a `.env` file in the project root and add your DeepL API key and the desired port:

```
DEEPL_NODE_API_KEY=your-deepl-api-key
PORT=your-port
```

## API Endpoints

### 1. Translate Text (`/translate`)

This endpoint accepts a POST request with the following format:

```json
{
  "text": "Text you want to translate",
  "fromLanguage": "es", // Source language code
  "toLanguage": "en" // Target language code
}
```

The response will have the following format:

```json
{
  "translatedText": "Translated text"
}
```

### 2. Get Supported Source Languages (`/supported-from-languages`)

This endpoint accepts a GET request and returns a list of the source languages supported by the DeepL API.

Successful response:

```json
{
  "supportedLanguages": ["es", "en", "fr", ...]
}
```

### 3. Get Supported Target Languages (`/supported-to-languages`)

This endpoint accepts a GET request and returns a list of the target languages supported by the DeepL API.

Successful response:

```json
{
  "supportedLanguages": ["es", "en", "fr", ...]
}
```

## Directory Structure

```
├── src/
│   ├── config/
│   │   └── config.ts
│   ├── controllers/
│   │   ├── supportedLanguagesController.ts
│   │   └── translateController.ts
│   ├── routes/
│   │   └── routes.ts
│   ├── services/
│   │   ├── supportedLanguagesService.ts
│   │   └── translationService.ts
│   ├── utils/
│   │   ├── corsConfig.ts
│   │   └── errorHandler.ts
│   ├── index.ts
│   └── server.ts
├── package.json
├── package-lock.json
└── README.md
```

- `src/config/config.ts`: File responsible for loading the DeepL API key.
- `src/controllers/translationController.ts`: Contains the controller functions to handle translation requests.
- `src/controllers/supportedLanguagesController.ts`: Contains the controller functions to handle requests for getting supported languages.
- `src/routes/routes.ts`: Defines the API routes.
- `src/services/translationService.ts`: Implements the translation logic using the DeepL API.
- `src/services/supportedLanguagesService.ts`: Implements the logic for getting the languages supported by the DeepL API.
- `src/utils/corsConfig.ts`: Configures the CORS policy for the API.
- `src/utils/errorHandler.ts`: Handles errors and exceptions in the API.
- `src/index.ts`: Main file that initializes the application.
- `src/server.ts`: Configures and starts the Express.js server.
- `package.json`: Project dependency configuration file.

## Execution

Once the dependencies are installed, you can start the application by running the following command:

```
npm start
```

The application will start on the port specified in the `.env` file (default: 3000).


## Technologies Used

- Node.js
- Express.js
- TypeScript
- dotenv (for managing environment variables)

