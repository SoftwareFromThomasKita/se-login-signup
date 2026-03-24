## How to Run

### 1. Install dependencies

Open a terminal and run:

```bash
cd server
npm install
```

Open a second terminal and run:

```bash
cd client
npm install
```

### 2. Start the server

In the first terminal:

```bash
cd server
node server.js
```

### 3. Start the React app

In the second terminal:

```bash
cd client
npm start
```

This opens http://localhost:3000 in your browser

## Usage

- **Signup** (`/`): Enter first name, last name, username, and password. Click Signup to create a user in MongoDB.
- **Login** (`/login`): Enter username and password. A success or failure message is displayed based on whether the credentials match a user in the database.

## Technologies Used

- **Frontend**: React, React Router DOM, Axios
- **Backend**: Node.js, Express, Mongoose, CORS
- **Database**: MongoDB Atlas