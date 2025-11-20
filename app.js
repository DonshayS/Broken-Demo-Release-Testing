const express = require('express');
const app = express();


const message = process.env.MESSAGE.toUpperCase(); 

app.get('/', (req, res) => {
    res.send(`Message: ${message}`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
