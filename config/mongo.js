const mongoose = require('mongoose');

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(
        DB_URI,
        {useNewUrlParser: true, useUnifiedTopology: true},
        (error, response) => {
            !error ? console.log(`*** Connection Sucessfully ***`) : console.log(`*** Error on Conection ***`)
        }
    );

}

module.exports = dbConnect