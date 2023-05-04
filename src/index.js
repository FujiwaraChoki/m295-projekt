const express = require('express');
const userRoutes = require('./routes/userRoutes');

// Initialisiere die App
const app = express();

// Middleware
app.use(express.json());

// Importierte Routes mit der App verbinden
app.use('/users', userRoutes);

// Lege den Port fest
const port = 3000 || process.env.PORT;

// Starte den Server
app.listen(port, () => {
    console.log(`Der Server läuft auf der folgenden URL: http://localhost:${port}`)
});
