# Echoo - Real-Time Chat Application

A real-time messaging and voice chat application inspired by Discord, built with a React frontend and a Node.js backend.

## Features

* **Real-time Text Messaging:** Instant messaging in channels and direct messages.
* **Servers and Channels:** Organize communities into servers with multiple text and voice channels.
* **User Authentication:** Secure user registration and login.
* **File Sharing:** Share images and files within conversations.
* **Online Presence:** See the status of other users (online, away, etc.).

## Tech Stack

* **Frontend:** React, Vite, Axios
* **Backend:** Node.js, Express.js, Socket.IO
* **Database:** Prisma ORM with a PostgreSQL database

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

* Node.js (v18 or later is recommended)
* npm (comes with Node.js)
* A PostgreSQL database server

---

## 🔧 Installation
Clone the repository to your local machine:

### 🔧 Installation

1.  **Clone the repository to your local machine:**
    ```bash
    git clone https://github.com/your-username/Echoo.git
    cd Echoo
    ```

2.  **Set up the Backend:**
    * Navigate to the backend directory:
        ```bash
        cd backend
        ```
    * Install the dependencies:
        ```bash
        npm install
        ```
    * Create an environment file by copying the example:
        ```bash
        cp .env.example .env
        ```
    * Open the new `.env` file and add your database connection URL:
        ```env
        # .env
        DATABASE_URL="postgresql://YOUR_DB_USER:YOUR_DB_PASSWORD@localhost:5432/echoo"
        PORT=3001
        ```
    * Push the database schema to your database:
        ```bash
        npx prisma db push
        ```
    * Start the backend server:
        ```bash
        npm run dev
        ```
    ✅ The backend should now be running on `http://localhost:3001`.

3.  **Set up the Frontend:**
    * Open a **new terminal** and navigate back to the root `Echoo` folder, then into the `frontend` directory:
        ```bash
        cd ../frontend
        ```
    * Install the dependencies:
        ```bash
        npm install
        ```
    * Create an environment file by copying the example:
        ```bash
        cp .env.example .env
        ```
    * Open the new `.env` file and make sure it points to your backend server:
        ```env
        # .env
        VITE_BACKEND_URL=http://localhost:3001/api
        ```
    * Start the frontend development server:
        ```bash
        npm run dev
        ```
  ✅ The frontend should now be running (usually on `http://localhost:5173`). Open this URL in your browser to use the application.

## Available Scripts
Backend (/backend)
npm run dev: Starts the backend server with Nodemon for auto-reloading.

Frontend (/frontend)
npm run dev: Starts the Vite development server for the React app.

### Available Scripts

#### Backend (`/backend`)

* `npm run dev`: Starts the backend server with Nodemon for auto-reloading.

#### Frontend (`/frontend`)

* `npm run dev`: Starts the Vite development server for the React app.

---

### Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  **Fork** the Project
2.  Create your Feature **Branch**
    ```bash
    git checkout -b feature/AmazingFeature
    ```
3.  **Commit** your Changes
    ```bash
    git commit -m 'Add some AmazingFeature'
    ```
4.  **Push** to the Branch
    ```bash
    git push origin feature/AmazingFeature
    ```
5.  Open a **Pull Request**
