const mongoose = require('mongoose');
const URI = "mongodb+srv://muaaz042:$Muaaz042@cluster0.uzavflp.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URI).then(()=>{
    console.log('MongoDB connection is established')
}).catch(err => console.error('connection error: ' + err)); 