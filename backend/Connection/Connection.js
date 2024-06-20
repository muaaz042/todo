const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/notes").then(()=>{
    console.log('MongoDB connection is established')
}).catch(err => console.error('connection error: ' + err)); 