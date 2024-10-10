const express = require('express');
const minimist = require('minimist');
const path = require('path');

const app = express();
const argv = minimist(process.argv.slice(2));
const PORT = argv.port || 3000;  // Default port

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/project.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project.html'));
});

app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html'));
});

// Handle registration form submission
app.post('/submit-registration', (req, res) => {
    const { name, email, password } = req.body;
    // Here you would typically save this information to a database
    res.send(`Registration successful for ${name}!`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
