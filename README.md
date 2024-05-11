# Text Translation Application

This monorepo contains a complete text translation application in different languages, consisting of a frontend and a backend. The frontend is a user interface that allows the user to enter text and select the source and target languages. The backend is an API that consumes the DeepL translation service to perform the requested translations. The app is hosted by vercel you can use the app through the following domain:
[https://google-translate-app-frontend.vercel.app/](https://google-translate-app-frontend.vercel.app)

## Prerequisites

- Node.js v18 or higher

## Installation and Execution

1. Clone this repository to your local machine:

```
git clone https://github.com/Keiner28/google-translate-app.git
```

2. Install the monorepo dependencies:

```
cd google-translate-app
npm install
```

3. Create the respective `.env` files specified in the README of each project

4. Start development in watch mode with Turbo Repo:

```
npm run dev
```

This command will install all the dependencies for the individual packages (frontend and backend) and start both projects simultaneously in development mode.

The frontend will be available at `http://localhost:3001`, and the backend at `http://localhost:5001`.

## Monorepo Structure

The monorepo structure is as follows:

```
monorepo/
├── apps/
│   ├── backend/
│   ├── frontend/
├── packages/
│   ├── config-eslint/
│   ├── config-typescript/
│   └── logger/
├── package.json
├── README.json
└── turbo.json
```

- `apps/`: Contains the frontend and backend packages of the application.
- `apps/frontend/`: Source code for the frontend of the application.
- `apps/backend/`: Source code for the backend (API) of the application.
- `packages/`: Contains shared packages between the frontend and backend, such as TypeScript and ESLint configurations.

## Contribution

If you wish to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a new branch for your contribution: `git checkout -b my-new-feature`
3. Make your changes and commit: `git commit -am 'Add new feature'`
4. Push your changes to the remote repository: `git push origin my-new-feature`
5. Create a new Pull Request in this repository.

## Contact

If you have any questions, comments, or suggestions, you can contact me through:

- Email: [keinergodinez@gmail.com](mailto:keinergodinez@gmail.com)
- GitHub: [https://github.com/Keiner28](https://github.com/Keiner28)
- LinkedIn: [https://www.linkedin.com/in/keiner28](https://www.linkedin.com/in/keiner28)
