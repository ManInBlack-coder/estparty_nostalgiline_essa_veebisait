const express = require('express');
const path = require('path');

const app = express();
const PORT = 3012;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Index.html',));
});

// Log incoming requests to static files
app.use((req, res, next) => {
    console.log(`Requested: ${req.url}`);
    next();
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});