const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));
const PORT = argv.port || 3000;  // Default to port 3000 if not provided

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
