const express = require('express');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

const app = express();
const argv = minimist(process.argv.slice(2));
const PORT = argv.port || 3000;  // Default to port 3000 if not provided

// Serve the home page (if applicable)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Serve the projects page
app.get('/project.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project.html'));
});

// Serve the registration page
app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
