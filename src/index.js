const express = require('express');
const cors = require('cors');
const session = require('express-session');

const { login, verify, logout } = require('./controllers/authController');

/*
The List of Tasks was generated with the help of ChatGPT:
https://chat.openai.com/chat
*/
const tasksRoutes = require('./routes/tasksRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());

// CORS
app.use(cors());

// Session
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
    cookie: {}
}));

// Routes
app.use('/tasks', tasksRoutes);

// Define the port
// eslint-disable-next-line no-undef
const port = process?.argv[2] ? parseInt(process?.argv[2]) : 5001;

// Endpoint for logging in
app.post('/login', login);

// Endpoint for verifying the session
app.get('/verify', verify);

// Endpoint for logging out
app.delete('/logout', logout);

// Start the server
app.listen(port, () => {
    console.log(`Der Server läuft auf der folgenden URL: http://localhost:${port}`);
});
