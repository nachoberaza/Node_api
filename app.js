/** Imports */
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const app = express();

/** Configurations */
require('dotenv').config();
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json());

/** Routes */
const routes = require('./routes/index_routes');
app.use("/api",routes);


/** Start-up the server */
app.listen(port, () => console.log(`🚀 Server started on http://localhost:${port}`));

/** MongoDB connection */
dbConnect();