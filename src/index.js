const express = require('express');
const cors = require('cors');
const session = require('express-session');
const { generateRandomId } = require('./utils');

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
const port = (process.argv[2] ? parseInt(process.argv[2]) : 5001) || process.env.PORT;

// Endpoint for logging in
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Please provide an email and password'
        });
    }

    if (password !== 'm295') {
        return res.status(401).json({
            success: false,
            message: 'Invalid password'
        });
    }

    const sessionID = generateRandomId();

    req.session.sessionID = sessionID;

    return res.status(200).json({
        success: true,
        session_id: sessionID,
        message: 'Login successful'
    });
});

// Endpoint for verifying the session
app.get('/verify', async (req, res) => {
    const sessionID = await req.session.sessionID;
    console.log(sessionID);

    if (!sessionID) {
        return res.status(403).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    return res.status(200).json({
        success: true,
        message: 'Authorized',
        session_id: sessionID
    });
});

// Endpoint for logging out
app.delete('/logout', (req, res) => {
    const { sessionID } = req.session;

    if (!sessionID) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    req.session.sessionID = null;

    return res.sendStatus(204);
});

// Catch all 404 errors
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Page not found'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Der Server läuft auf der folgenden URL: http://localhost:${port}`)
});
