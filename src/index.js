const express = require('express');
const cors = require('cors');
const session = require('express-session');
const { generateRandomId } = require('./utils');

/*
The List of Tasks was generated with the help of ChatGPT:
https://chat.openai.com/chat
*/
const tasksRoutes = require('./routes/tasksRoutes');

// Initialisiere die App
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

// Importierte Routes mit der App verbinden
app.use('/tasks', tasksRoutes);

// Port definieren
const port = (process.argv[2] ? parseInt(process.argv[2]) : 5001) || process.env.PORT;

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

app.get('/verify', async (req, res) => {
    const sessionID = await req.session.sessionID;
    console.log(sessionID);

    if (!sessionID) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized',
            session_id: sessionID
        });
    }

    return res.status(200).json({
        success: true,
        message: 'Authorized',
        session_id: sessionID
    });
});


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

// Starte den Server
app.listen(port, () => {
    console.log(`Der Server läuft auf der folgenden URL: http://localhost:${port}`)
});
