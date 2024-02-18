# Collaborative Whiteboard Backend

This repository is the backbone of the Collaborative Whiteboard, providing the backend services essential for real-time interaction and data management. Utilizing Node.js and Socket.IO, it supports live data exchange and session management, with SQL databases for data persistence.

## Features

- **Real-Time Data Exchange:** Powers live sharing and interaction among users on the whiteboard.
- **User Authentication:** Manages secure login and user sessions for protected access to collaborative features.
- **Data Persistence:** Uses SQL database to store session and user data, ensuring the permanence and recoverability of work.

## Technology Stack

- Node.js for backend services
- Socket.IO for managing real-time web socket communications
- SQL Database for storing user and session data
- Express.js for handling RESTful API requests

## Usage

This backend application supports the frontend by providing necessary services such as user authentication, session management, and real-time updates. It's crucial for the full functionality of the Collaborative Whiteboard.

For an overview of the frontend component and its functionalities, refer to the `collaborative-whiteboard-paper-js-frontend` repository.
