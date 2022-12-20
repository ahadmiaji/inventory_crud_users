const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

mongoose.set('strictQuery', true);

mongoose.connect(dbURL)
.then(()=>{
    console.log('mongodb compass is connected');
})
.catch((error)=>{
    console.log(error);
    process.exit(1);
});