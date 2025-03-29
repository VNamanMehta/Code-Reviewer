

# Code Reviewer

This project is a full-stack application designed to review code snippets using AI. It consists of a **Backend** powered by Express.js and a **Frontend** built with React and Vite.

## How to Clone the Repository

1. Open a terminal on your computer.
2. Navigate to the directory where you want to clone the project.
3. Run the following command to clone the repository:
   ```sh
   git clone https://github.com/VNamanMehta/Code-Reviewer.git
   ```
4. Navigate into the project directory:
   ```
   cd Code-Reviewer
   ```
5. Install dependencies for both the Backend and Frontend:
   For the Backend:
   ```
   cd Backend
   npm install
   ```
   For the Frontend:
   ```
   cd ../Frontend
   npm install
   ```
6. Set up the environment variables:
   In the Backend directory, create a .env file and add your GEMINI_API_KEY:
   ```
   GEMINI_API_KEY=your-api-key-here
   ```
7. Start the Backend and Frontend servers:
   Backend:
   ```
   cd Backend
   npx nodemon server.js
   ```
   Frontend:
   ```
   cd ../Frontend
   npm run dev
   ```
8. Open the application in your browser:

   Backend runs on http://localhost:3002.
   Frontend runs on http://localhost:5173.

## Backend
The backend is responsible for handling API requests and interacting with the Google Generative AI API to provide code reviews.

#### Key Files:
server.js: Entry point for the backend server.
src/app.js: Configures middleware and routes.
src/routes/ai.routes.js: Defines the /ai/get-review endpoint.
src/controllers/ai.controller.js: Handles incoming requests and calls the service layer.
src/services/ai.service.js: Interacts with the Google Generative AI API.

#### Environment Variables:
GEMINI_API_KEY: API key for Google Generative AI. Add this to the .env file.
Dependencies:
express
dotenv
cors
@google/generative-ai

#### Running the Backend:
Navigate to the Backend directory.
Install dependencies: npm install
Start the server: node server.js or npx nodemon server.js

## Frontend
The frontend provides a user interface for entering code snippets and viewing AI-generated reviews.

#### Key Files:
src/App.jsx: Main React component for the application.
src/App.css: Styles for the application.
src/main.jsx: Entry point for the React app.

#### Features:
Code editor with syntax highlighting (using react-simple-code-editor and prismjs).
Dark mode toggle.
Markdown rendering for AI-generated reviews.

#### Dependencies:
react
react-dom
axios
prismjs
react-markdown
react-simple-code-editor

#### Running the Frontend:
Navigate to the Frontend directory.
Install dependencies: npm install
Start the development server: npm run dev
Open http://localhost:5173 in your browser.

#### .gitignore
The .gitignore file ensures that sensitive files and unnecessary directories are not tracked by Git. Key entries include:
node_modules
.env
dist
