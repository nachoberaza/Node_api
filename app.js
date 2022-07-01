/** Imports */
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const app = express();

/** Configurations */
require('dotenv').config();
const PUBLIC_URL = process.env.PUBLIC_URL 
const port = process.env.PORT || 3001

app.use(cors());
app.use(express.json());
app.use(express.static("storage")); // This allows express to access to files store in 'storage' folder

/** Routes */
const routes = require('./routes/index_routes');
app.use("/api",routes);


/** Start-up the server */
app.listen(port, () => {
    console.clear();
    const date = (new Date()).toUTCString();
    console.log(`${date} - 🚀 Server started on ${PUBLIC_URL}`);
});

/** MongoDB connection */
dbConnect();