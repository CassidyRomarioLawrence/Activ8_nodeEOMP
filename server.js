const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Active8"
    });
});

const PORT = process.env.PORT || 2023;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})