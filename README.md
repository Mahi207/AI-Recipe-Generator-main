# AI Recipe Generator

A full-stack application that generates recipes using AI based on ingredients you provide or images you upload. 

## Tech Stack

### Frontend
- **React** (via Vite)
- **React Router DOM** for navigation
- **Axios** for API requests
- CSS for styling

### Backend
- **Node.js** with **Express**
- **MongoDB** (with Mongoose) for database
- **Groq SDK** for AI recipe generation
- **Multer** for handling file/image uploads

## Project Structure

- `Client-files/`: Contains the React frontend application.
- `Server-Files/`: Contains the Node/Express backend API.

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB database (local or cloud like MongoDB Atlas)
- An API Key for Groq (or corresponding AI provider)

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd ai-recipe-generator
   ```

2. **Setup the Backend**:
   ```bash
   cd Server-Files
   npm install
   ```
   Create a `.env` file in the `Server-Files` directory and add your environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   # Add your AI provider API key here
   ```
   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Setup the Frontend**:
   Open a new terminal window:
   ```bash
   cd Client-files
   npm install
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

4. **View the Application**:
   Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## Features
- **AI-Powered Generation**: Get personalized recipe suggestions based on your inputs.
- **Ingredient Input**: Manually enter ingredients you have on hand.
- **Image Uploads**: Upload photos of ingredients to generate recipes (supported by Multer backend).
- **Dietary Filters**: Customize your generated recipes based on dietary restrictions.
