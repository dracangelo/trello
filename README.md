# Trello Clone

This is a Trello clone built using React for the frontend and Node.js with Express for the backend. The application allows users to create boards, lists, and cards, enabling efficient task management.

## Features

- User Authentication (Login and Signup)
- Create, Read, Update, and Delete (CRUD) operations for Boards, Lists, and Cards
- Drag-and-drop functionality for organizing tasks
- Responsive Design
- Modal dialogs for creating boards and lists
- Comments and attachments for cards

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces
- **React Router**: For routing and navigation
- **Redux (or Context API)**: State management
- **react-beautiful-dnd**: For drag-and-drop functionality
- **Axios**: For making HTTP requests

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing data
- **Mongoose**: ODM for MongoDB and Node.js
- **JSON Web Tokens (JWT)**: For user authentication

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (for cloud database) or local MongoDB installation

### Clone the Repository


git clone https://github.com/dracangelo/trello-clone.git
cd trello-clone


### Frontend Setup

### Install dependencies:

npm install


### Start the frontend development server:


npm start


### Backend Setup
- Navigate to the server directory:


cd server
- Install dependencies:


npm install

- Create a .env file in the server directory with the following content:


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

- Start the backend server:


npx nodemon config.js

## Usage

Visit http://localhost:3000 to access the application.
Use the signup page to create a new account or login to an existing account.
Create boards, lists, and cards to manage your tasks.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## known bugs
the app will freeze and crash when creating new lists

