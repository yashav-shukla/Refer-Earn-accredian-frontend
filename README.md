# Refer & Earn - Assignment

## Introduction
This project is a Full Stack application (Express.js, React.js, Node.js, SQL) for a Refer & Earn landing page. It allows users to refer a course to their friends through a user-friendly interface.

## Features
- **Frontend**: Built with React.js, featuring a responsive and intuitive UI.
- **Backend**: RESTful API developed with Node.js and Express.js, integrated with Prisma ORM for MySQL database connectivity.

- **Form Validation**: Implemented to ensure all required fields are filled before submission.

## Installation

### Prerequisites
Before starting, make sure you have the following installed:
- Node.js (version 14 or above)
- npm (Node Package Manager)

### Steps to Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yashav-shukla/refer&earn-assignment
   cd refer-and-earn

2. **Backend Setup**

- Navigate to the backend directory:
    ```bash
    cd server
- Install dependencies:
    ```bash
    npm install
- Create a .env file based on .env.example and configure MySQL database connection details.

3. **Start Server**

- Start the backend server:
    ```bash
    npm start / nodemon
- The server will run on http://localhost:5000.

4. **Frontend Setup**

- Open a new terminal window/tab and navigate to the frontend directory:
    ```bash
    cd client
- Install dependencies:
    ```bash
    npm install

5. **Start Frontend Server**

- Start the frontend development server:
    ```bash
    npm start
- The frontend will be accessible at http://localhost:3000.

6. **Access the Application**

- Open your web browser and go to http://localhost:3000 to view and interact with the Refer & Earn landing page.

**Usage**

- Fill out the referral form with valid details.
- Click on "Submit" to refer a course to your friend.

--------------------------------

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
