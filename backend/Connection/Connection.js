const mongoose = require('mongoose');
const connectionString = "mongodb+srv://muaaz042:$Muaaz042@cluster0.uzavflp.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionString).then(()=>{
    console.log('MongoDB connection is established')
}).catch(err => console.error('connection error: ' + err)); 