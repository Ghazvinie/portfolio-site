const express = require("express");
const path = require('path');


const PORT = 8080

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});